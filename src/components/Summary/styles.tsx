import styled from "styled-components"
import { Theme } from "../../styles/theme"


export const ContainerSum = styled.div`
  width: 40%;
  @media (max-width: 900px){
    width: 100%;
  }
`

export const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${Theme.box.shadow};
  padding: 25px;
  margin-bottom: 10px;
  border-radius: 10px;
`

export const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  & h1 {
    font-size: ${Theme.font.sizes.small};
    @media (max-width: 430px) {
      font-size: ${Theme.font.sizes.xsmall};
  }
  }
  & p {
    font-size: ${Theme.font.sizes.xxxsmall};
    color: ${Theme.colors.cor_cinza_200};
    @media (max-width: 430px) {
      font-size: ${Theme.font.sizes.zsmall};
    }
  }
`

export const ImageSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & img {
    width: 60%;
    @media (max-width: 430px) {
      width: 70%;
    }
  }
  & h1 {
    @media (max-width: 430px) {
      font-size: ${Theme.font.sizes.xsmall};
    }
  }
  @media (max-width: 430px) {
      flex-direction: column;
  }
`

export const TotalSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  & p {
    font-size: ${Theme.font.sizes.xxsmall};
    @media (max-width: 430px) {
      font-size: ${Theme.font.sizes.xxxsmall};
    }
  }
  & h1 {
    font-size: ${Theme.font.sizes.zsmall};
    color: ${Theme.colors.cor_cinza_200};
    @media (max-width: 430px) {
      font-size: ${Theme.font.sizes.xxxsmall};
    }
  }
`

export const CupomSummary = styled.div`
  display: flex;
  background-color: ${Theme.colors.cor_branca_300};
  border-radius: 15px;
  & button {
    border: none;
    background-color: initial;
    padding: 5px;
    @media (max-width: 430px){
      background-color: ${Theme.colors.cor_azul};
      color: ${Theme.colors.cor_branca};
      border-radius: 10px;
  }
  }
  @media (max-width: 430px){
    flex-direction: column;
    background-color: initial;
  }
`
