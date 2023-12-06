import { configureStore } from "@reduxjs/toolkit";
import { carrosSlice } from "./reducers/itens";

export const store = configureStore({
  reducer: {
    carros: carrosSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
