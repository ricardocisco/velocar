import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/image_catalogo/logo.png";
import { Theme } from "../../styles/theme";
import { FaBars, FaHeart, FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

interface ListaUlProps {
  children: React.ReactNode;
  active: boolean;
}

const Nav = styled.nav`
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
const ListaUl: React.FC<ListaUlProps> = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 780px) {
    display: ${(props) => (props.active ? "block" : "none")};
    flex-direction: column;
  }
`;
const SearchBox = styled.div`
  display: flex;
  padding: 5px;
  height: 40px;
  width: 350px;
  align-self: center;
  border: 1px solid ${Theme.colors.cor_texto};
  border-radius: 30px;
`;

const Search = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
`;
const Lista = styled.li`
  list-style: none;
  padding: 5px;
`;

const LinkA = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${Theme.font.sizes.xxxsmall};
  font-weight: ${Theme.font.bold};
  text-decoration: none;
  cursor: pointer;
  & span {
    display: none;
    margin: 5px;
    @media (max-width: 780px){
      display: block;
    }
  }
`;

const ImgLogo = styled.img`
  width: 120px;
`;

const IconNav = styled.i`
  font-size: ${Theme.font.sizes.xsmall};
`

const Icon = styled.i`
  display: none;
  @media (max-width: 780px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: ${Theme.font.sizes.xsmall};
    cursor: pointer;
  }
`;

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <Nav>
      <LinkA to="/">
        <ImgLogo src={Logo} alt="Logo velocar" />
      </LinkA>
      <Icon
        onClick={() => {
          setActive(!active);
        }}
      >
        {!active ? <FaBars /> : <AiOutlineClose />}
      </Icon>
      <ListaUl active={active}>
        <Lista>
          <SearchBox>
            <Search placeholder="Pesquisar" />
          </SearchBox>
        </Lista>
        <Lista>
          <LinkA to="/">
            Dashboard
          </LinkA>
        </Lista>
        <Lista>
          <LinkA to="/">
            <IconNav><FaHeart /></IconNav>
            <span>Curtidos</span>
          </LinkA>
        </Lista>
        <Lista>
          <LinkA to="/">
            <IconNav><FaBell /></IconNav>
            <span>Notificações</span>
          </LinkA>
        </Lista>
        <Lista>
          <LinkA to="/">
            <IconNav><IoIosSettings /></IconNav>
            <span>Configurações</span>
          </LinkA>
        </Lista>
      </ListaUl>
    </Nav>
  );
}
