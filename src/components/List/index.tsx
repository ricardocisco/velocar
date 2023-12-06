import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useCarros } from '../../redux/reducers/itens';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";



export default function ListCar() {

  const dispatch = useDispatch();
  const carros = useSelector(useCarros)

  return (

    <div>
      <ul>
        {carros.map(carro => <li>
          <h1>{carro.titulo}</h1>
          <img src={carro.foto}></img>
          <p>{carro.categoria}</p>
          <p>{carro.preco}</p>
          {carro.favorito ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </li>)}
      </ul>
    </div>
  )
}
