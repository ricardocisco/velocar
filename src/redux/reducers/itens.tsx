import { v4 as uuid } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import NissanGTR from '../../images/image_catalogo/car2.png'
import Esportivo from '../../images/image_catalogo/car1.png'
import RollsRoyce from '../../images/image_catalogo/car3.png'
import Pajero from '../../images/image_catalogo/car4.png'
import Nivus from '../../images/image_catalogo/car5.png'
import Cronos from '../../images/image_catalogo/car7.png'

interface carrosProps {
  titulo: string
  foto: string
  favorito: boolean
  preco: number
  id: string
  categoria: string
}

const INITIAL_STATE: carrosProps[] = [{
  titulo: 'NISSAN-GTR',
  foto: NissanGTR,
  favorito: false,
  preco: 99.00,
  id: '1',
  categoria: 'sport',
}, {
  titulo: 'Koenigsegg',
  foto: Esportivo,
  favorito: false,
  preco: 80.00,
  id: '2',
  categoria: 'sport',
}, {
  titulo: 'Rolls Royce',
  foto: RollsRoyce,
  favorito: false,
  preco: 85.00,
  id: '3',
  categoria: 'sedan',
}, {
  titulo: 'Pajero',
  foto: Pajero,
  favorito: false,
  preco: 75.00,
  id: '4',
  categoria: 'suv',
}, {
  titulo: 'Nivus',
  foto: Nivus,
  favorito: false,
  preco: 85.00,
  id: '5',
  categoria: 'suv',
}, {
  titulo: 'Cronos',
  foto: Cronos,
  favorito: false,
  preco: 85.00,
  id: '6',
  categoria: 'suv',
}
]

export const carrosSlice = createSlice({
  name: 'carros',
  initialState: INITIAL_STATE,
  reducers: {
  }
})

export default carrosSlice.reducer

export const useCarros = () => {
  return INITIAL_STATE as carrosProps[]
}
