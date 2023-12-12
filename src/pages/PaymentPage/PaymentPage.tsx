import React from 'react'
import Searchbar from '../../components/Navbar/Searchbar';
import { HeroPage } from '../Homepage/styles';
import Form from '../../components/Form/Form';
import { DivForm, SectionPay } from './styles';
import Summary from '../../components/Summary/Summary';

export default function PaymentPage() {
  return (
    <div>
      <Searchbar />
      <HeroPage>
        <SectionPay>
          <Form />
          <Summary />
        </SectionPay>
      </HeroPage>
    </div>
  )
}
