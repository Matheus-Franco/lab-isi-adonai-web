import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface Client {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  client: Client;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  client: Client;
  signIn(credentials: LoginCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const ClientAuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AdonaiIFES:token');
    const client = localStorage.getItem('@AdonaiIFES:client');

    if (token && client) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, client: JSON.parse(client) }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    });

    const { token, client } = response.data;

    localStorage.setItem('@AdonaiIFES:token', token);
    localStorage.setItem('@AdonaiIFES:client', JSON.stringify(client));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, client });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AdonaiIFES:token');
    localStorage.removeItem('@AdonaiIFES:client');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ client: data.client, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context
}