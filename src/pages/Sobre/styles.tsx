import styled from "styled-components";
import { Theme } from "../../styles/theme";


export const SobreBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: 0 auto;
`

export const SobreList = styled.div`
  width: 50%;
  & div{
    display: flex;
    align-items: center;
    font-size: ${Theme.font.sizes.xsmall};
  }
`

export const ListStyled = styled.li`
  list-style: none;
`

export const StyledH = styled.h1`
  margin-left: 5px;
  font-size: ${Theme.font.sizes.xxsmall};
`

export const StyledP = styled.p`

`

export const SobreText = styled.div`
`

export const SobreWrapper = styled.div`

`
