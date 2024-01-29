import React from 'react'
import { HowBox, HowMain, HowP, HowTitle } from './styles'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function HowWork() {
  return (
    <>
      <Navbar/>
      <HowBox>
        <HowMain>
          <HowTitle>Reserva Simples e Rápida:</HowTitle>
          <HowP>
            Para começar, basta acessar nossa plataforma online intuitiva. 
            Insira as datas e horários desejados, escolha o modelo de carro que melhor atenda às suas necessidades e pronto! 
            Você está a apenas alguns cliques de distância de garantir a sua reserva.
          </HowP>
        </HowMain>
        <HowMain>
          <HowTitle>Variedade de Modelos:</HowTitle>
          <HowP>
            Oferecemos uma ampla gama de veículos para atender a todos os gostos e necessidades. 
            Seja um compacto ágil para a cidade, uma SUV espaçosa para a família ou um elegante carro de luxo para uma viagem especial, 
            temos o carro perfeito para você. Explore nossa frota diversificada e encontre o veículo ideal para a sua jornada.
          </HowP>
        </HowMain>
        <HowMain>
          <HowTitle>Retirada e Devolução Convenientes:</HowTitle>
          <HowP>
            Facilitamos a retirada e a devolução do veículo. Escolha entre nossos diversos pontos de coleta estrategicamente localizados, 
            seja no aeroporto, estação de trem ou em diferentes partes da cidade. Com horários flexíveis, 
            adaptamo-nos à sua agenda para tornar o processo o mais conveniente possível.
          </HowP>
        </HowMain>
        <HowMain>
          <HowTitle>Transparência de Custos:</HowTitle>
          <HowP>
            Entendemos a importância da transparência nos custos. Antes de confirmar a reserva, apresentamos claramente todos os custos associados, 
            como taxas de seguro, combustível e possíveis custos adicionais. Dessa forma, você pode planejar seu orçamento com antecedência, 
            sem surpresas desagradáveis.
          </HowP>
        </HowMain>
        <HowMain>
          <HowTitle>Assistência 24/7:</HowTitle>
          <HowP>
            Para garantir sua tranquilidade durante toda a jornada, oferecemos suporte 24 horas por dia, 7 dias por semana. 
            Se surgir algum problema na estrada, estaremos prontos para ajudar. 
            Nossa equipe dedicada está disponível para atender suas perguntas, fornecer orientações e resolver qualquer contratempo que possa surgir.
          </HowP>
        </HowMain>
        <HowMain>
          <HowTitle>Manutenção e Limpeza Garantidas:</HowTitle>
          <HowP>
            Todos os nossos veículos passam por rigorosas verificações de manutenção para garantir que estejam em perfeitas condições antes de chegar até você. 
            Além disso, cada carro é minuciosamente limpo e higienizado, proporcionando a você uma experiência de condução segura e agradável.
          </HowP>
        </HowMain>
        <HowMain>
          <HowTitle>Programas de Fidelidade e Descontos:</HowTitle>
          <HowP>
            Valorizamos nossos clientes frequentes. Ao participar de nosso programa de fidelidade, 
            você pode desfrutar de descontos exclusivos, 
            upgrades gratuitos e outros benefícios especiais. Quanto mais você aluga, mais vantagens acumula.

            Embarque nessa jornada sem complicações e descubra a conveniência e liberdade que nosso sistema de aluguel de carros oferece. 
            Estamos ansiosos para ser parte da sua próxima aventura sobre quatro rodas. Reserve agora e comece a explorar!
          </HowP>
        </HowMain>
      </HowBox>
      <Footer/>
    </>
  )
}
