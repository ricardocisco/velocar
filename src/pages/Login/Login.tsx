import React, { useState } from 'react'
import  {BoxLogin, BoxInput, TitleInput, DivInput, LabelInput, InputStyle, LinkStyle, LinkBox, TextStyle } from './styles'
import Button from '../../components/Button/Button'
import { FaHome } from "react-icons/fa";
import { auth } from '../../services/firebaseConfig';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try{  
      await new Promise((_, reject) => {
        signInWithEmailAndPassword(email, password)
          .then(() => reject(new Error('Credenciais Inválidas!'))) // Simulando um erro para o caso de sucesso
          .catch(reject);
      }); 
    }catch {
      console.error('Erro ao autenticar:', error?.code)

      if (error?.code === 'auth/user-not-found' || error?.code === 'auth/wrong-password' || error?.code === 'auth/invalid-credential') {
        setMensagem('Credenciais Inválidas!');
      } else {
        setMensagem('Erro ao autenticar. Por favor, tente novamente mais tarde.');
      }
    }
  }

  if (user) {
    return <Navigate to="/" />
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
          {mensagem && <p>{mensagem}</p>}
          <Button  backgroundColor='cor_azul' onClick={handleSignIn}>Entrar</Button>
          <LinkBox>
            <TextStyle>Não tem uma conta? <LinkStyle to="/registrar">Registre-se</LinkStyle></TextStyle>
          </LinkBox>  
          <LinkBox>
            <LinkStyle to="/resetPassword">Esqueci a senha</LinkStyle>
          </LinkBox>
      </BoxInput>
    </BoxLogin>
  )
}
