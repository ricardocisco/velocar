import { v4 as uuid } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import NissanGTR from '../../images/image_catalogo/car2.png'
import Esportivo from '../../images/image_catalogo/car1.png'
import RollsRoyce from '../../images/image_catalogo/car3.png'
import Pajero from '../../images/image_catalogo/car4.png'
import Nivus from '../../images/image_catalogo/car5.png'
import Cronos from '../../images/image_catalogo/car7.png'
import MGZS from '../../images/image_catalogo/car8.png'

interface carrosProps {
  titulo: string
  foto: string
  favorito: boolean
  preco: number
  id: string
  categoria: string
}

const INITIAL_STATE: carrosProps[] = [{
  titulo: 'Nissan-GTR',
  foto: Pajero,
  favorito: false,
  preco: 99.00,
  id: uuid(),
  categoria: 'SPORT',
}, {
  titulo: 'Koenigsegg',
  foto: Nivus,
  favorito: false,
  preco: 120.00,
  id: uuid(),
  categoria: 'SPORT',
}, {
  titulo: 'Rolls Royce',
  foto: MGZS,
  favorito: false,
  preco: 90.00,
  id: uuid(),
  categoria: 'SEDAN',
}, {
  titulo: 'Pajero',
  foto: Pajero,
  favorito: false,
  preco: 75.00,
  id: uuid(),
  categoria: 'SUV',
}, {
  titulo: 'Nivus',
  foto: Nivus,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'SUV',
}, {
  titulo: 'Cronos',
  foto: Cronos,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'Hatchback',
}, {
  titulo: 'CR-V',
  foto: Cronos,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'SUV',
}, {
  titulo: 'New MG ZS',
  foto: MGZS,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'Hatchback',
}, {
  titulo: 'Nivus',
  foto: Nivus,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'SUV',
}, {
  titulo: 'Cronos',
  foto: Cronos,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'Hatchback',
}, {
  titulo: 'CR-V',
  foto: Cronos,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'SUV',
}, {
  titulo: 'New MG ZS',
  foto: MGZS,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'Hatchback',
}, {
  titulo: 'Nivus',
  foto: Nivus,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'SUV',
}, {
  titulo: 'Cronos',
  foto: Cronos,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'Hatchback',
}, {
  titulo: 'CR-V',
  foto: Cronos,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'SUV',
}, {
  titulo: 'New MG ZS',
  foto: MGZS,
  favorito: false,
  preco: 85.00,
  id: uuid(),
  categoria: 'Hatchback',
},
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
