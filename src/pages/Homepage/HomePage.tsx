import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Kwid from "../../images/image_home/kwid_car.png";
import AppleStore from "../../images/image_home/apple_store.png";
import AndroidStore from "../../images/image_home/android_store.png";
import Button from "../../components/Button/Button";
import { HeroPage, Section, SectionImg, SectionText, Form, ContainerHow, BoxHow, HowWorkBox, ImageWrapper, Image, ContentHow } from "./styles";
import Brands from "../../components/Brands/Brands";

import Calendar from "../../images/image_home/calendar.png";
import  Car from '../../images/image_home/car.png';
import Loc from "../../images/image_home/location.png";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroPage>
        <Section>
          <SectionText>
            <h1>
              Encontre, <br />
              reserve e alugue
              <br />
              um carro em
              <br />
              etapas <span> fáceis</span>.
            </h1>
            <p>
              Obtenha um carro onde e quando precisar com seu dispositivo iOS ou
              Android.
            </p>
            <div>
              <Link to="/">
                <img src={AppleStore} alt="" />
              </Link>
              <Link to="/">
                <img src={AndroidStore} alt="" />
              </Link>
            </div>
          </SectionText>
          <SectionImg>
            <img src={Kwid} alt="foto carro kwid" />
          </SectionImg>
        </Section>
        <Section>
          <Form>
            <div>
              <label>LOCAL</label>
              <input type="text" placeholder="Digite sua localização" />
            </div>
            <div>
              <label>DATA DE RETIRADA</label>
              <input type="date" />
            </div>
            <div>
              <label>DATA DE RETORNO</label>
              <input type="date" />
            </div>
            <Button backgroundColor={"cor_azul"}>Pesquisar</Button>
          </Form>
        </Section>
        <Section>
          <Brands/>
        </Section>
        <Section>
          <ContainerHow>
            <BoxHow>
              <h1>COMO FUNCIONA</h1>
              <p>Alugue seguindo os 3 passos a seguir</p>
            </BoxHow>
            <HowWorkBox>
              <ContentHow 
              backgroundColor={"cor_branca"}
              imageSrc={Loc}
              title="Escolha um local"
              description="Escolha sua localização e econte seu melhor carro."
              />
              <ContentHow 
              backgroundColor={"cor_azul_200"}
              imageSrc={Calendar}
              title="Escolha uma data"
              description="Selecione a data e hora de retirada para reservar seu carro"
              />
              <ContentHow 
              backgroundColor={"cor_branca"}
              imageSrc={Car}
              title="Escolha seu carro"
              description="Reserve seu carro e nós o entregaremos diretamente para você."
              />
            </HowWorkBox>
          </ContainerHow>
        </Section>
      </HeroPage>
    </div>
  );
}
