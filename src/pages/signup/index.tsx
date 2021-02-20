import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';

const Signup: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={Logo} alt="GoBarber" />
      <form>
        <h1>Faça seu casdastro</h1>
        <Input name="nome" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default Signup;
