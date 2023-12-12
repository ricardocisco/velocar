import { styled } from "styled-components";
import { Theme } from "../../styles/theme";


export const SectionPay = styled.section`
  display: flex;
  padding: 10px;
  gap: 20px;
  @media (max-width: 768px){
    flex-direction: column-reverse;
  }
`;

export const Container = styled.div`
  width: 50%;
  @media (max-width: 900px){
    width: 100%;
  }
`

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${Theme.box.shadow};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  & h1 {
    font-size: ${Theme.font.sizes.xxsmall};
  }
  & p {
    font-size: ${Theme.font.sizes.zsmall};
    color: ${Theme.colors.cor_cinza_200};
  }
`

export const DateFormBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1250px){
    width: 100%;
  }
`

export const DateBox = styled.div`
  display: flex;
  & div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1150px){
    flex-direction: column;
    width: 100%;
  }
`

export const FormBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    & div {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 1150px){
    display: block
  }
`

export const LabelStyled = styled.label`
  color: ${Theme.font.sizes.xxsmall};
  margin-bottom: 10px;
  font-weight: ${Theme.font.bold};
`

export const Message = styled.p`
  font-size: 14px;
  color: ${Theme.colors.cor_vermelha};
`

export const InputStyled = styled.input`
  padding: 15px 35px;
  margin-right: 10px;
  font-size: 14px;
  border: none;
  border-radius: ${Theme.border.radius};
  color: ${Theme.colors.cor_texto};
  background-color: ${Theme.colors.cor_branca_300};
`

export const CardStyle = styled.img`
  height: 20px;
`

export const RadioInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  margin-top: 8px;
  border-radius: 10px;
  background-color: ${Theme.colors.cor_branca_300};
  & div {
    display: flex;
    align-items: center;
    & input {
      
    }
  }
`

/**Resumo */
export const SummaryBox = styled.div`
  
`

export const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  & h1 {
    font-size: ${Theme.font.sizes.xxsmall};
  }
  & p {
    font-size: ${Theme.font.sizes.zsmall};
    color: ${Theme.colors.cor_cinza_200};
  }
`

export const ImageSummary = styled.div`
  
`

export const TotalSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  & p {
    font-size: ${Theme.font.sizes.xxsmall};
  }
  & h1 {
    font-size: ${Theme.font.sizes.zsmall};
    color: ${Theme.colors.cor_cinza_200};
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
  }
`
