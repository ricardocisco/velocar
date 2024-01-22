import React, { useState } from 'react'
import  {BoxLogin, BoxInput, TitleInput, DivInput, LabelInput, InputStyle, LinkStyle, LinkBox, TextStyle } from './styles'
import Button from '../../components/Button/Button'
import { FaHome } from "react-icons/fa";
import { auth } from '../../services/firebaseConfig';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn() {
    signInWithEmailAndPassword(email, password)
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.user.email}</p>
      </div>
    );
  }

  return (
    <BoxLogin>
      <BoxInput>
          <LinkBox>
            <LinkStyle to="/">
              <FaHome size="24px"/>
            </LinkStyle>
          </LinkBox>
          <TitleInput>Login</TitleInput>
          <DivInput>
            <LabelInput>Email</LabelInput>
            <InputStyle
            placeholder='Email'
            type='text'
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </DivInput>
          <DivInput>
            <LabelInput>Senha</LabelInput>
            <InputStyle
            placeholder='Senha'
            type='password'
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </DivInput>
          <Button  backgroundColor='cor_azul' onClick={() => handleSignIn()}>Entrar</Button>
          <LinkBox>
            <TextStyle>Não tem uma conta? <LinkStyle to="/registrar">Registre-se</LinkStyle></TextStyle>
          </LinkBox>  
      </BoxInput>
    </BoxLogin>
  )
}
