import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface Admin {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  admin: Admin;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  admin: Admin;
  signIn(credentials: LoginCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AdminAuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AdonaiIFES:token');
    const admin = localStorage.getItem('@AdonaiIFES:admin');

    if (token && admin) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, admin: JSON.parse(admin) }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('admin/sessions', {
      email,
      password
    });

    const { token, admin } = response.data;

    localStorage.setItem('@AdonaiIFES:token', token);
    localStorage.setItem('@AdonaiIFES:admin', JSON.stringify(admin));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, admin });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AdonaiIFES:token');
    localStorage.removeItem('@AdonaiIFES:admin');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ admin: data.admin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAdminAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context
}