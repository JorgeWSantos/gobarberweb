import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';
import ToastContainer from '../components/toastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void; // eslint-disable-line
  removeToast(id: string): void; // eslint-disable-line
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={messages} />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error('useToast must be used within a ToastProvider.');

  return context;
}

export { ToastProvider, useToast };
