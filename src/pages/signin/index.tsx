import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="GoBarber" />
      <form>
        <h1>Faça seu Logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Entrar</button>
        <a href="fogot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;