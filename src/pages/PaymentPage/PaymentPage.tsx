import React from 'react'
import Searchbar from '../../components/Navbar/Searchbar';
import { HeroPage } from '../Homepage/styles';
import Form from '../../components/Form/Form';
import { SectionPay } from './styles';
import Summary from '../../components/Summary/Summary';
import Footer from '../../components/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { Navigate } from 'react-router-dom';

export default function PaymentPage() {

  const [user] = useAuthState(auth);

  return (
    <div>
      <Searchbar />
      {user ? "" : <Navigate to="/" />}
      <HeroPage>
        <SectionPay>
          <Form />
          <Summary />
        </SectionPay>
      </HeroPage>
      <Footer />
    </div>
  )
}
