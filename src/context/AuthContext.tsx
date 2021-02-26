import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  // eslint-disable-next-line no-unused-vars
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Jorge', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
