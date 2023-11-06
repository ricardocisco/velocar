import * as S from './styles';
import React from 'react'

export type ButtonProps = {
    children?: React.ReactNode;
    backgroundColor?: "cor_azul_200" | "cor_azul";
}

export default function Button({children, backgroundColor}: ButtonProps) {
  return (
    <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
  )
}
