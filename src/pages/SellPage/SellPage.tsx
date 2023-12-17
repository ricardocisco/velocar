import React from 'react'
import Searchbar from '../../components/Navbar/Searchbar';
import { HeroPage } from '../Homepage/styles';
import { SectionPay } from './styles';
import Footer from '../../components/Footer/Footer';
import FormSell from '../../components/Form/FormSell/FormSell';

export default function SellPage() {
  return (
    <div>
      <Searchbar />
      <HeroPage>
        <SectionPay>
          <FormSell />
        </SectionPay>
      </HeroPage>
      <Footer />
    </div>
  )
}
