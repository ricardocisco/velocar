import styled from "styled-components"
import { Theme } from "../../styles/theme"
import { Link } from "react-router-dom"

export const DivBox = styled.div`
`

export const CarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 305px;
  height: 280px;
  padding: 15px;
  margin: 15px;
  box-shadow: ${Theme.box.shadow};
  border-radius: 5px;
`
export const BoxList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TBox = styled.h1`
  font-size: ${Theme.font.sizes.xsmall};
`

export const PBox = styled.p`
  font-size: ${Theme.font.sizes.xxxsmall};
  color: ${Theme.colors.cor_cinza_200};
`

export const PriceP = styled.p`
  font-size: ${Theme.font.sizes.xxsmall};
  font-weight: ${Theme.font.bold};
`

export const BoxFav = styled.div`
`

export const ImgCar = styled.img`
`

export const BoxBt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  background-color: ${Theme.colors.cor_azul};
  color: ${Theme.colors.cor_branca};
  padding: 10px 20px;
  border-radius: 10px;
`
