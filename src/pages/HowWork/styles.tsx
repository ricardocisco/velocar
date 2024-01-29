import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const HowBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1440px;
  margin: 0 auto;
  padding: 100px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px){
    width: 100%;
    padding: 50px;
  }
`

export const HowMain = styled.main`
  display: flex;
  flex-direction: column;
  border-radius: ${Theme.border.radius};
  box-shadow: ${Theme.box.shadow};
  padding: 20px;
  margin: 5px;
`

export const HowTitle = styled.h1`
  font-size: ${Theme.font.sizes.small};
  font-weight: ${Theme.font.normal};
`

export const HowP = styled.p`
  
`
