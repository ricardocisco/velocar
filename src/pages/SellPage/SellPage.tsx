import React from 'react'
import Searchbar from '../../components/Navbar/Searchbar';
import { HeroPage } from '../Homepage/styles';
import { SectionPay } from './styles';
import Footer from '../../components/Footer/Footer';
import FormSell from '../../components/Form/FormSell/FormSell';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

export default function SellPage() {

  const [user] = useAuthState(auth);

  return (
    <div>
      <Searchbar />
      {user ? "" : <Navigate to="/" />}
      <HeroPage>
        <SectionPay>
          <FormSell />
        </SectionPay>
      </HeroPage>
      <Footer />
    </div>
  )
}
