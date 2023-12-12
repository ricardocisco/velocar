import React from 'react'
import { Container, CupomSummary, DivForm, ImageSummary, InputStyled, TitleBox, TitleSummary, TotalSummary } from '../../pages/PaymentPage/styles'

export default function Summary() {
  return (
    <Container>
      <DivForm>
        <TitleSummary>
          <h1>Resumo do Aluguel</h1>
          <p>Os preços podem mudar dependendo da duração do aluguel e do preço do seu carro alugado.</p>
        </TitleSummary>
        <ImageSummary>
          <img src='' alt='imagem do sumario'></img>
          <h1></h1>
        </ImageSummary>
        <TotalSummary>
          <h1>Subtotal</h1>
          <p></p>
        </TotalSummary>
        <TotalSummary>
          <h1>Taxas</h1>
          <p></p>
        </TotalSummary>
        <CupomSummary>
          <InputStyled type='text' placeholder='Cupom' />
          <button>Aplicar</button>
        </CupomSummary>
        <TitleBox>
          <h1>Total Aluguel</h1>
          <p>R$70.00</p>
        </TitleBox>
      </DivForm>
    </Container>
  )
}
