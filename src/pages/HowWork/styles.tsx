import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const HowBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 100px;
  justify-content: center;
  align-items: center;
`

export const HowMain = styled.main`
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
