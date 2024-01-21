import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../../redux/store'
import busca, { mudarBusca } from '../../redux/reducers/busca'

const Search = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
`

export default function Busca() {

  const buscar = useSelector((state: RootState) => state.busca.buscaTerm);
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;

    dispatch(mudarBusca(newSearch))

    console.log(newSearch)
  }

  return (
    <div>
      <Search
        placeholder="Oque você procura?"
        type="text"
        value={buscar}
        onChange={handleSearch}
      />
    </div>
  )
}
