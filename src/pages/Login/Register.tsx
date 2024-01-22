import React, { useState } from 'react';
import  {BoxLogin, BoxInput, TitleInput, DivInput, LabelInput, InputStyle, LinkStyle, LinkBox, TextStyle } from './styles';
import Button from '../../components/Button/Button';
import { FaHome } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignOut() {
    createUserWithEmailAndPassword(email, password)
  }

  if(loading){
    return <p>carregando..</p>
  }
  
  return (
    <BoxLogin>
      <BoxInput>
          <LinkBox>
            <LinkStyle to="/">
              <FaHome size="24px"/>
            </LinkStyle>
          </LinkBox>
          <TitleInput>Registre-se</TitleInput>
          <DivInput>
            <LabelInput htmlFor='email'>Email</LabelInput>
            <InputStyle
            placeholder='Email'
            type='text'
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            />
          </DivInput>
          {/* <DivInput>
            <LabelInput>Confirme o email</LabelInput>
            <InputStyle
            placeholder='Email'
            type='text'
            name="email"
            id="email"
            />
          </DivInput> */}
          <DivInput>
            <LabelInput htmlFor='password'>Senha</LabelInput>
            <InputStyle
            placeholder='Senha'
            type='password'
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            />
          </DivInput>
          <Button backgroundColor='cor_azul' onClick={() => handleSignOut()}>Registrar</Button>
          <LinkBox>
            <TextStyle>Já tem uma conta? <LinkStyle to="/login">Entrar</LinkStyle></TextStyle>
          </LinkBox>  
      </BoxInput>
    </BoxLogin>
  )
}
