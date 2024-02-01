import styled from "styled-components";
import { Theme } from "../../styles/theme";


export const SobreBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: 0 auto;
  @media (max-width: 1400px){
    width: 100%;
    flex-direction: column;
  }
`

export const SobreList = styled.div`
  margin-top: 25px;
  flex-direction: column;
  width: 50%;
  & div{
    display: flex;
    align-items: center;
    font-size: ${Theme.font.sizes.xsmall};
  }
  @media (max-width: 1400px){
    width: 100%;
    flex-direction: column;
  }
`

export const ListStyled = styled.li`
  list-style: none;
  font-size: ${Theme.font.sizes.xxxsmall};
  text-decoration: underline;
`

export const StyledH = styled.h1`
  margin-left: 5px;
  font-size: ${Theme.font.sizes.xxsmall};
`

export const StyledP = styled.p`

`

export const SobreText = styled.div`
  padding: 0 20px 0 20px;
`

export const SobreWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
`
