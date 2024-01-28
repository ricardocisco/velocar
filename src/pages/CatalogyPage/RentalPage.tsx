import React from 'react';
import Searchbar from '../../components/Navbar/Searchbar';
import ListCar from '../../components/List';
import { HeroPage } from '../Homepage/styles';
import { BgExp, BgRotate, Box, ImgSrc, Section, TitleBox } from './styles';
import Button from '../../components/Button/Button';
import Cronos from '../../images/image_catalogo/car7.png'
import MGZS from '../../images/image_catalogo/car8.png'
import Footer from '../../components/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { Navigate } from 'react-router-dom';

export default function CatalogyPage() {

  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Searchbar />
      {user ? "" : <Navigate to="/"/>}
      <HeroPage>
        <Section>
          <BgRotate>
            <Box>
              <TitleBox>Coloque seu carro para alugar</TitleBox>
              <Button backgroundColor='cor_azul' disabled={true}>Saiba Mais</Button>
              <Box>
                <ImgSrc src={MGZS} alt='carro'></ImgSrc>
              </Box>
            </Box>
          </BgRotate>
          <BgExp>
            <Box>
              <TitleBox>Compre um carro novo ou usado agora mesmo</TitleBox>
              <Button backgroundColor='cor_azul_200' disabled={true}>Saiba Mais</Button>
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
