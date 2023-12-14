import React from 'react'
import styled from 'styled-components'

const Search = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
`

export default function Busca() {
  return (
    <div>
      <Search
        placeholder="Oque você procura?"
      />
    </div>
  )
}
