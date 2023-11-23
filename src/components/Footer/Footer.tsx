import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../styles/theme'
import { BiLogoTwitter, BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { Link } from 'react-router-dom';


const FooterDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Theme.colors.footer};
`

const FooterBox = styled.div`
    width: 1440px;
    height: 150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h1 {
        color: ${Theme.colors.cor_branca};
    }
`

const LinkSocial = styled(Link)`
    display: flex;
    align-items: center;
    color: ${Theme.colors.cor_branca};
    font-size: ${Theme.font.sizes.small};
    border: 1px solid ${Theme.colors.cor_branca};
    border-radius: 60px;
    padding: 5px;
    margin: 4px;
`
const Social = styled.div`
    display: flex;
`

export default function Footer() {
  return (
    <FooterDiv>
        <FooterBox>
            <h1>VELOCAR</h1>
            <Social>
                <LinkSocial to="/"><BiLogoTwitter/></LinkSocial>
                <LinkSocial to="/"><BiLogoFacebook /></LinkSocial>
                <LinkSocial to="/"><BiLogoLinkedin /></LinkSocial>
                <LinkSocial to="/"><BiLogoInstagram/></LinkSocial>
                <LinkSocial to="/"><BiLogoYoutube/></LinkSocial>
            </Social>
        </FooterBox>
    </FooterDiv>
  )
}
