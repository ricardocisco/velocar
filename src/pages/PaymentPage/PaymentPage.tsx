import React from 'react'
import Searchbar from '../../components/Navbar/Searchbar';
import { Section } from '../Homepage/styles';
import Form from '../../components/Form/Form';

export default function PaymentPage() {
  return (
    <div>
      <Searchbar />
      <Section>
        <Form />
      </Section>
    </div>
  )
}
