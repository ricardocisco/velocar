import React, { useState } from 'react'
import Logo from '../../images/image_catalogo/logo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebaseConfig'
import { Icon, ImgLogo, LinkA, Lista, ListaUl, Nav, PTitle } from './Styles'
import { signOut } from 'firebase/auth'


export default function Navbar() {
  const [active, setActive] = useState(false);

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  }

  return (
    <Nav>
      <LinkA to="/">
        <ImgLogo src={Logo} alt='Logo velocar' />
      </LinkA>
      <Icon onClick={() => { setActive(!active) }}>
        {!active ? <FaBars /> : <AiOutlineClose />}
      </Icon>
      <ListaUl active={active}>
        <Lista>
          {user ? <LinkA to="/vender">Coloque para alugar</LinkA> : ""}
        </Lista>
        <Lista>
          {user ? <LinkA to="/aluguel">Aluguel</LinkA> : ""}
        </Lista>
        <Lista>
          <LinkA to="/">Como Funciona</LinkA>
        </Lista>
        <Lista>
          <LinkA to="/">Sobre nós</LinkA>
        </Lista>
        <Lista>
          {user ? <PTitle onClick={logout}>Logout</PTitle> : <LinkA to="/login">Login</LinkA>}
        </Lista>
      </ListaUl>
    </Nav>
  )
}
