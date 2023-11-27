import styled from "styled-components";
import Logo from '../../images/image_catalogo/logo.png';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

const Nav = styled.nav`
    width:  1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    @media (max-width: 1400px){
        width: 100%;
    }
    @media (max-width: 700px){
        flex-direction: column;
    }
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

const SearchBox = styled.div`
    display: flex;
    padding: 5px;
    height: 40px;
    align-self: center;
    border: 1px solid ${Theme.colors.cor_texto};
    border-radius: 30px;
`

const Search = styled.input`
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
`

const Icon =  styled.i`
    display: flex;
    align-items: center;
`

export default function Searchbar() {
    return(

        <Nav>
            <LinkA to="/">
                <ImgLogo src={Logo} alt='Logo velocar'/>
            </LinkA>
            <SearchBox>
                <Icon><IoMdSearch></IoMdSearch></Icon>
                <Search placeholder="Pesquisar"/>
                <Icon><VscSettings></VscSettings></Icon>
            </SearchBox>
        </Nav>    
    )
};