import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  has_description: boolean;
}

const ToastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const ToastContent = styled(animated.div)<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${props => ToastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    top: 19px;
    right: 16px;
    border: 0;
    background: transparent;
    opacity: 0.6;
    color: inherit;
  }

  & + div {
    margin-top: 8px;
  }

  ${props =>
    !props.has_description &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
