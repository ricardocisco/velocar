import React from 'react'
import { InputStyled } from '../../pages/PaymentPage/styles'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ContainerSum, CupomSummary, ImageSummary, SummaryBox, TitleSummary, TotalSummary } from './styles';

export default function Summary() {

  const { carroId } = useParams();
  const carros = useSelector((state: RootState) => state.carros);

  const card = carros.find((c) => c.id === carroId);

  return (
    <ContainerSum>
      <SummaryBox>
        <TitleSummary>
          <h1>Resumo do Aluguel</h1>
          <p>Os preços podem mudar dependendo da duração do aluguel e do preço do seu carro alugado.</p>
        </TitleSummary>
        <ImageSummary>
          <img src={card?.foto} alt='imagem do sumario'></img>
          <h1>{card?.titulo}</h1>
        </ImageSummary>
        <TotalSummary>
          <h1>Subtotal</h1>
          <p>R${card?.preco.toFixed(2)}</p>
        </TotalSummary>
        <TotalSummary>
          <h1>Taxas</h1>
          <p>R$0,00</p>
        </TotalSummary>
        <CupomSummary>
          <InputStyled type='text' placeholder='Cupom' />
          <button>Aplicar</button>
        </CupomSummary>
        <TotalSummary>
          <h1>Total Aluguel</h1>
          <p>R${card?.preco.toFixed(2)}</p>
        </TotalSummary>
      </SummaryBox>
    </ContainerSum>
  )
}
