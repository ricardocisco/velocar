import * as S from './styles';
import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode;
  backgroundColor?: "cor_azul_200" | "cor_azul";
  disabled?: boolean
}

export default function Button({ children, backgroundColor, disabled }: ButtonProps) {
  return (
    <S.Container backgroundColor={backgroundColor} disabled={disabled}>{children}</S.Container>
  )
}
