import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SearchState {
  buscaTerm: string
}

const initialState: SearchState = {
  buscaTerm: ''
}

export const buscaSlice = createSlice({
  name: 'busca',
  initialState,
  reducers: {
    mudarBusca: (state, action: PayloadAction<string>) => {
      state.buscaTerm = action.payload
    }
  }
})

export const {mudarBusca} = buscaSlice.actions
export default buscaSlice.reducer
