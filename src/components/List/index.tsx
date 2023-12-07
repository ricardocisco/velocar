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
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 305px;
  height: 280px;
  padding: 10px;
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

const BoxFav = styled.div`
`

const ImgCar = styled.img`
`


export default function ListCar() {

  const IconProps = {
    size: '22',
  }

  const dispatch = useDispatch();
  const carros = useSelector(useCarros)

  return (

    <DivBox>
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
          <div>
            <p>R${carro.preco.toFixed(2)}/dia</p>
          </div>
        </List>)}
      </CarList>
    </DivBox>
  )
}
