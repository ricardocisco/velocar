import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/image_catalogo/logo.png';
import { Theme } from '../../styles/theme';
import {FaBars} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


interface ListaUlProps {
    children: React.ReactNode;
    active: boolean;
}

const Nav = styled.nav`
    width:  1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    @media (max-width: 1440px){
        width: 100%;
    }
    @media (max-width: 700px){
        flex-direction: column;
    }
`
const ListaUl: React.FC<ListaUlProps> = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 700px){
        display: ${props => props.active ? "block" : "none" };
        flex-direction: column;
    }
`

const Lista = styled.li`
    list-style: none;
    padding: 5px;
`

const LinkA = styled(Link)`
    font-size: ${Theme.font.sizes.xxxsmall};
    font-weight: ${Theme.font.bold};
    text-decoration: none;
    cursor: pointer;
`

const ImgLogo = styled.img`
    width: 120px;
`
const Icon = styled.i`
    display: none;
    @media (max-width: 700px){
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: ${Theme.font.sizes.xsmall};
        cursor: pointer;
    }
`

export default function Navbar () {

    const [active, setActive] = useState(false);

  return (
    <Nav>
        <LinkA to="/">
            <ImgLogo src={Logo} alt='Logo velocar'/>
        </LinkA>
        <Icon onClick={() => setActive(!active)}>
            { !active ? <FaBars/> : <AiOutlineClose/> }
        </Icon>
        <ListaUl active={active}>
            <Lista>
                <LinkA to="/">Coloque para alugar</LinkA>
            </Lista>
            <Lista>
                <LinkA to="/">Aluguel</LinkA>
            </Lista>
            <Lista>
                <LinkA to="/">Compra</LinkA>
            </Lista>
            <Lista>
                <LinkA to="/">Como Funciona</LinkA>
            </Lista>
            <Lista>
                <LinkA to="/">Sobre nós</LinkA>
            </Lista>
            <Lista>
                <LinkA to="/">Login</LinkA>
            </Lista>
        </ListaUl>
    </Nav>
  )
}
