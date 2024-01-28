import React, { useState } from 'react'
import { BoxInput, BoxLogin, DivInput, InputStyle, LabelInput, LinkBox, LinkStyle, TextStyle, TitleInput } from './styles'
import { FaHome } from 'react-icons/fa'
import Button from '../../components/Button/Button'
import { auth } from '../../services/firebaseConfig';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

export default function ResetPassword() {

  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [disable, setDisable] = useState(false);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try{
      sendPasswordResetEmail(email);
      setMensagem("Email enviado para a redefinição de senha!")
      setDisable(true)
      setTimeout(() => {
        setDisable(false)
      }, 5000)
    }catch{
      console.log(error)
    }
  }

  return (
    <BoxLogin>
      <BoxInput>
          <LinkBox>
            <LinkStyle to="/">
              <FaHome size="24px"/>
            </LinkStyle>
          </LinkBox>
          <TitleInput>Redefinir a senha</TitleInput>
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
            {sending ? mensagem : ""}
          </DivInput>
          <Button backgroundColor='cor_azul' onClick={handleReset} disabled={disable}>Reenviar Senha</Button>
      </BoxInput>
    </BoxLogin>
  )
}
