import React from 'react';
import Searchbar from '../../components/Navbar/Searchbar';
import ListCar from '../../components/List';
import { HeroPage } from '../Homepage/styles';
import { Section } from './styles';
import styled from 'styled-components';
import BG1 from '../../images/image_catalogo/bg_catalogo.png';
import BG2 from '../../images/image_catalogo/bg_catalogo2.png';


const BgRotate = styled.div`
  background-image: url(${BG1});
  width: 640px;
  height: 360px;
  background-size: cover;
  border-radius: 15px;
`

const BgExp = styled.div`
  background-image: url(${BG2});
  width: 640px;
  height: 360px;
  background-size: cover;
  border-radius: 15px;
`

export default function CatalogyPage() {
  return (
    <div>
      <Searchbar />
      <HeroPage>
        <Section>
          <BgRotate>

          </BgRotate>
          <BgExp>

          </BgExp>
        </Section>
        <Section>
          <ListCar />
        </Section>
      </HeroPage>
    </div>
  )
}
