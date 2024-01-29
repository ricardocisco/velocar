import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { ListStyled, SobreBox, SobreList, SobreText, SobreWrapper, StyledH, StyledP } from './styles'
import { IoListOutline } from "react-icons/io5";


export default function Sobre() {
  return (
    <>
      <Navbar />
      <SobreBox>
        <SobreList>
          <div>
            <IoListOutline />
            <StyledH>Aqui você encontra:</StyledH>
          </div>
          <ListStyled>Sobre Nós</ListStyled>
          <ListStyled>Nossa Missão</ListStyled>
          <ListStyled>Compromisso com a Qualidade</ListStyled>
          <ListStyled>Inovação e Sustentabilidade</ListStyled>
          <ListStyled>Equipe Apaixonada</ListStyled>
          <ListStyled>Sobre Nós</ListStyled>
          <ListStyled>Comunidade e Responsabilidade Social</ListStyled>
          <ListStyled>Sua Jornada Começa Conosco</ListStyled>
        </SobreList>
        <SobreText>
          <SobreWrapper>
            <StyledH>
              Sobre Nós: Conduzindo Experiências Inesquecíveis em Cada Viagem
            </StyledH>
            <StyledP>
              Bem-vindo ao Velocar, onde a mobilidade se transforma em uma jornada emocionante e sem complicações.
              Somos mais do que um serviço de aluguel de carros; somos a ponte entre você e a liberdade sobre quatro rodas.
              Conheça um pouco mais sobre quem somos e a nossa missão de tornar cada viagem uma experiência inesquecível.
            </StyledP>
          </SobreWrapper>
          <SobreWrapper>
            <StyledH>
              Nossa Missão:
            </StyledH>
            <StyledP>
              No coração da nossa empresa está a missão de proporcionar mobilidade sem barreiras, inspirando confiança e empoderando cada cliente a explorar o mundo ao seu próprio ritmo.
              Acreditamos que cada viagem é uma oportunidade única de criar memórias duradouras, e nos esforçamos para ser o seu parceiro confiável nessa jornada.
            </StyledP>
          </SobreWrapper>
          <SobreWrapper>
            <StyledH>
              Compromisso com a Qualidade:
            </StyledH>
            <StyledP>
              Nosso compromisso com a qualidade é evidente em cada detalhe. Desde a nossa frota de veículos modernos e bem-mantidos até a excelência no atendimento ao cliente,
              buscamos constantemente superar as expectativas. Cada carro que você aluga conosco é uma extensão da nossa dedicação em fornecer uma experiência segura, confiável e confortável.
            </StyledP>
          </SobreWrapper>
          <SobreWrapper>
            <StyledH>
              Inovação e Sustentabilidade:
            </StyledH>
            <StyledP>
              Abraçamos a inovação como um meio de melhorar continuamente nossos serviços.
              Ao mesmo tempo, estamos comprometidos com práticas sustentáveis para minimizar nosso impacto ambiental.
              Acreditamos que é possível explorar o mundo de maneira consciente,
              e buscamos constantemente maneiras de reduzir nossa pegada e promover a sustentabilidade.
            </StyledP>
          </SobreWrapper>
          <SobreWrapper>
            <StyledH>
              Equipe Apaixonada:
            </StyledH>
            <StyledP>
              Nossa equipe é composta por indivíduos apaixonados por viagens e comprometidos em tornar sua experiência conosco excepcional.
              Desde os especialistas em atendimento ao cliente até os técnicos de manutenção,
              todos compartilhamos a visão de proporcionar a você a melhor jornada possível,
              garantindo sua segurança e satisfação.
            </StyledP>
          </SobreWrapper>
          <SobreWrapper>
            <StyledH>
              Comunidade e Responsabilidade Social:
            </StyledH>
            <StyledP>
              Além de conectar você ao seu destino, também nos conectamos com a comunidade ao nosso redor.
              Acreditamos na responsabilidade social e contribuímos para iniciativas locais que promovem a educação,
              a segurança rodoviária e o bem-estar geral da sociedade.
            </StyledP>
          </SobreWrapper>
          <SobreWrapper>
            <StyledH>
              Sua Jornada Começa Conosco:
            </StyledH>
            <StyledP>
              Ao escolher a Velocar, você não está apenas alugando um carro; você está se unindo a uma comunidade de viajantes que valorizam a liberdade, a aventura e a qualidade.
              Sua jornada começa conosco, e estamos animados para ser parte dos momentos que tornam suas viagens verdadeiramente inesquecíveis.
              Explore, descubra, e viva cada quilômetro ao máximo. Estamos aqui para guiá-lo em cada passo da estrada. Seja bem-vindo à experiência Velocar.
            </StyledP>
          </SobreWrapper>
        </SobreText>
      </SobreBox>
      <Footer />
    </>
  )
}
