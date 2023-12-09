import styled from "styled-components";
import BG1 from '../../images/image_catalogo/bg_catalogo.png';
import BG2 from '../../images/image_catalogo/bg_catalogo2.png';
import { Theme } from "../../styles/theme";

export const BgRotate = styled.div`
  background-image: url(${BG1});
  width: 640px;
  height: 360px;
  background-size: cover;
  border-radius: 15px;
  margin: 10px;
  @media (max-width: 700px){
    width: inherit;
    height: inherit;
  }
`

export const BgExp = styled.div`
  background-image: url(${BG2});
  width: 640px;
  height: 360px;
  background-size: cover;
  border-radius: 15px;
  margin: 10px;
  @media (max-width: 700px){
    width: inherit;
    height: inherit;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`

export const TitleBox = styled.h1`
  color: ${Theme.colors.cor_branca};
  font-weight: ${Theme.font.normal};
  font-size: ${Theme.font.sizes.xxsmall};
  margin-bottom: 10px;
`

export const ImgSrc = styled.img`
  width: 100%;
`

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  @media (max-width: 700px){
    flex-direction: column;
  }
`;

