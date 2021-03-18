import React, { useState } from 'react';
import * as S from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { useHistory } from 'react-router';
import { useAuth } from '../../../hooks/clientAuth';

const Login: React.FC = () => {
  const { push } = useHistory();
  const { signIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      await signIn({
        email,
        password
      });

      push('/dashboard')
    } catch (e) {
      console.log('Erro')
    }
  }

  return (
      <S.Container>
          <S.ImageBackground />

          <S.Content>
            <h1>Adonai</h1>
            <p>Faça login com a sua conta</p>

            <S.Form>
                <Input 
                  placeholder="E-mail"  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  placeholder="Senha" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleLogin}>Entrar</Button>
            </S.Form>
          </S.Content>
      </S.Container>
  )
}

export default Login;