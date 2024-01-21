import * as S from './styles';
import React from 'react'

export type ButtonProps = {
  children?: React.ReactNode;
  backgroundColor?: "cor_azul_200" | "cor_azul";
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, backgroundColor, disabled, onClick }: ButtonProps) {
  return (
    <S.Container onClick={onClick} backgroundColor={backgroundColor} disabled={disabled}>{children}</S.Container>
  )
}
