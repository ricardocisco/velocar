import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useCarros } from '../../redux/reducers/itens';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styled from 'styled-components';
import { Theme } from '../../styles/theme';
import Button from '../Button/Button';



const DivBox = styled.div`
`

const CarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const List = styled.div`
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
const BoxList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TBox = styled.h1`
  font-size: ${Theme.font.sizes.xsmall};
`

const PBox = styled.p`
  font-size: ${Theme.font.sizes.xxxsmall};
  color: ${Theme.colors.cor_cinza_200};
`

const PriceP = styled.p`
  font-size: ${Theme.font.sizes.xxsmall};
  font-weight: ${Theme.font.bold};
`

const BoxFav = styled.div`
`

const ImgCar = styled.img`
`

const BoxBt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export default function ListCar() {

  const IconProps = {
    size: '22',
  }

  const dispatch = useDispatch();
  const carros = useSelector(useCarros)

  return (

    <DivBox>
      <p>Carros Populares</p>
      <CarList>
        {carros.map(carro => <List>
          <BoxList>
            <div>
              <TBox>{carro.titulo}</TBox>
              <PBox>{carro.categoria}</PBox>
            </div>
            <BoxFav>
              {carro.favorito ? <IoMdHeart {...IconProps} /> : <IoMdHeartEmpty {...IconProps} />}
            </BoxFav>
          </BoxList>
          <ImgCar src={carro.foto} alt='foto carro'></ImgCar>
          <BoxBt>
            <PriceP>R${carro.preco.toFixed(2)}/dia</PriceP>
            <Button backgroundColor='cor_azul'>Alugar</Button>
          </BoxBt>
        </List>)}
      </CarList>
    </DivBox>
  )
}
