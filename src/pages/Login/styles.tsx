import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "../../styles/theme";

export const BoxLogin = styled.div`
  display:  flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const BoxInput = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: ${Theme.box.shadow};
  border-radius: ${Theme.border.radius};
  height: 360px;
  width: 400px;
  @media (max-width: 430px){
    width: 90%;
  }
`

export const TitleInput = styled.h1`
  font-size: ${Theme.font.sizes.medium};
  @media (max-width: 430px){
    font-size: ${Theme.font.sizes.small};
  }
`

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 5px;
`

export const LabelInput  = styled.label`
  font-size: ${Theme.font.sizes.xxsmall};
  @media (max-width: 430px){
    font-size: ${Theme.font.sizes.xxxsmall};
  }
`

export const InputStyle = styled.input`
  outline: none;
  border: none;
  background-color: ${Theme.colors.cor_cinza_300};
  border-radius: ${Theme.border.radius};
  padding: 12px;
  font-size: ${Theme.font.sizes.xxxsmall};
  width: 100%;
  @media (max-width: 430px){
    padding: 8px;
  }
`

export const LinkBox =  styled.div`
  
`

export const TextStyle = styled.span`
  
`

export const LinkStyle = styled(Link)`
  text-decoration: underline;
  &:hover{
    color: ${Theme.colors.cor_azul};
  }
`

