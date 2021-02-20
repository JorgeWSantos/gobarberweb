import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="GoBarber" />
      <form>
        <h1>Faça seu Logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Entrar</Button>
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
