import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toFavorito, viewCar } from '../../redux/reducers/itens';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { RootState } from '../../redux/store';
import { BoxBt, BoxFav, BoxList, CarList, DivBox, ImgCar, List, PBox, PriceP, StyledLink, TBox } from './styles';

interface carrosProps {
  titulo: string
  foto: string
  favorito: boolean
  preco: number
  id: string
  categoria: string
}

export const ListCar: React.FC = () => {

  const IconProps = {
    size: '22',
  }
  const buscar = useSelector((state: RootState) => state.busca.buscaTerm);
  const carros = useSelector((state: RootState) => state.carros);
  const dispatch = useDispatch();

  const filterCar = carros.filter((carro) => carro.titulo.toLowerCase().includes(buscar.toLowerCase()))

  const handleViewCar = (carro: carrosProps) => {
    dispatch(viewCar(carro));
  }

  return (

    <DivBox>
      <p>Carros Populares</p>
      <CarList>
        {filterCar.map(carro => <List key={carro.id}>
          <BoxList>
            <div>
              <TBox>{carro.titulo}</TBox>
              <PBox>{carro.categoria}</PBox>
            </div>
            <BoxFav>
              {carro.favorito
                ? <IoMdHeart {...IconProps} color='#ff0000' onClick={() => dispatch(toFavorito(carro.id))} />
                : <IoMdHeartEmpty {...IconProps} onClick={() => dispatch(toFavorito(carro.id))} />
              }
            </BoxFav>
          </BoxList>
          <ImgCar src={carro.foto} alt='foto carro'></ImgCar>
          <BoxBt>
            <PriceP>R${carro.preco.toFixed(2)}/dia</PriceP>
            <StyledLink to={`/pagamento/${carro.id}`} onClick={() => handleViewCar(carro)}>Alugar</StyledLink>
          </BoxBt>
        </List>)}
      </CarList>
    </DivBox>
  )
}

export default ListCar
