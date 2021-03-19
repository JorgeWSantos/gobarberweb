import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, ToastContent } from './styles';

const Toast: React.FC = () => {
  return (
    <Container>
      <ToastContent hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <b>Algo deu errado!</b>
          <p>Não foi possível fazer login na aplicação.</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastContent>

      <ToastContent type="error" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <b>Algo deu errado!</b>
          <p>Não foi possível fazer login na aplicação.</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastContent>

      <ToastContent type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <b>Algo deu errado!</b>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastContent>
    </Container>
  );
};

export default Toast;
