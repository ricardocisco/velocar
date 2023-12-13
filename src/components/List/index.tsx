import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { viewCar } from '../../redux/reducers/itens';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { RootState } from '../../redux/store';
import { BoxBt, BoxFav, BoxList, CarList, DivBox, ImgCar, List, PBox, PriceP, StyledLink, TBox } from './styles';


export const ListCar: React.FC = () => {

  const IconProps = {
    size: '22',
  }
  const dispatch = useDispatch();
  const carros = useSelector((state: RootState) => state.carros);

  const handleViewCar = (carro: any) => {
    dispatch(viewCar(carro));
  }

  return (

    <DivBox>
      <p>Carros Populares</p>
      <CarList>
        {carros.map(carro => <List key={carro.id}>
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
            <StyledLink to={`/pagamento/${carro.id}`} onClick={() => handleViewCar(carro)}>Alugar</StyledLink>
          </BoxBt>
        </List>)}
      </CarList>
    </DivBox>
  )
}

export default ListCar
