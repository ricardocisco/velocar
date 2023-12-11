import React from 'react';
import Searchbar from '../../components/Navbar/Searchbar';
import ListCar from '../../components/List';
import { HeroPage } from '../Homepage/styles';
import { BgExp, BgRotate, Box, ImgSrc, Section, TitleBox } from './styles';
import Button from '../../components/Button/Button';
import Cronos from '../../images/image_catalogo/car7.png'
import MGZS from '../../images/image_catalogo/car8.png'
import Footer from '../../components/Footer/Footer';

export default function CatalogyPage() {
  return (
    <div>
      <Searchbar />
      <HeroPage>
        <Section>
          <BgRotate>
            <Box>
              <TitleBox>Coloque seu carro para alugar</TitleBox>
              <Button backgroundColor='cor_azul'>Saiba Mais</Button>
              <Box>
                <ImgSrc src={MGZS} alt='carro'></ImgSrc>
              </Box>
            </Box>
          </BgRotate>
          <BgExp>
            <Box>
              <TitleBox>Compre um carro novo ou usado agora mesmo</TitleBox>
              <Button backgroundColor='cor_azul_200'>Saiba Mais</Button>
              <Box>
                <ImgSrc src={Cronos} alt='carro'></ImgSrc>
              </Box>
            </Box>
          </BgExp>
        </Section>
        <Section>
          <ListCar />
        </Section>
      </HeroPage>
      <Footer />
    </div>
  )
}
