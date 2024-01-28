import styled from "styled-components";
import { Theme } from "../../styles/theme";
import { Link } from "react-router-dom";

interface ListaUlProps {
  children: React.ReactNode
  active: boolean
}

export const Nav = styled.nav`
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
export const ListaUl: React.FC<ListaUlProps> = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 700px){
        display: ${props => props.active ? 'block' : 'none'};
        flex-direction: column;
    }
`

export const Lista = styled.li`
    list-style: none;
    padding: 5px;
`

export const LinkA = styled(Link)`
    font-size: ${Theme.font.sizes.xxxsmall};
    font-weight: ${Theme.font.bold};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${Theme.colors.cor_cinza};
    }
`

export const PTitle = styled.p`
    font-size: ${Theme.font.sizes.xxxsmall};
    font-weight: ${Theme.font.bold};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${Theme.colors.cor_cinza};
    }
`

export const ImgLogo = styled.img`
    width: 120px;
`
export const Icon = styled.i`
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
