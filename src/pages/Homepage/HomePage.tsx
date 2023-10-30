import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'
import Kwid from '../../images/image_home/kwid_car.png'
import { Theme } from '../../styles/theme'

const HeroPage = styled.div`
    width:  1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    @media (max-width: 1440px){
        width: 100%;
    }
    @media (max-width: 700px){
        flex-direction: column;
    }
`

const Section = styled.section`
  display: flex;
`

const SectionImg = styled.section`
  width: 50%;
  @media (max-width: 700px){
      width: 70%;;
    }
  & img{
    width: 100%;
  }
`

const SectionText = styled.section`
  width: 50%;
  & h1{
    font-size: ${Theme.font.sizes.large};
    @media (max-width: 700px){
      font-size: ${Theme.font.sizes.xsmall};
    }
  }
  & p {
    color: ${Theme.colors.cor_cinza};
  }
  & span {
    color: ${Theme.colors.cor_azul};
  }
`

export default function HomePage() {
  return (
    <div>
       <Navbar/>
       <HeroPage>
          <Section>
            <SectionText>
              <h1>
                Encontre, <br/>
                reserve e alugue<br/>
                um carro em<br/>
                etapas <span> fáceis</span>.
              </h1>
              <p>
                Obtenha um carro onde e quando precisar com seu dispositivo iOS ou Android.
              </p>
            </SectionText>
            <SectionImg>
                <img src={Kwid} alt='foto carro kwid'/>
            </SectionImg>
          </Section>
       </HeroPage>
    </div>
  )
}
