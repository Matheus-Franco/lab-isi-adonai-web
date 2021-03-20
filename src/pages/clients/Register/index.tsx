import React, { useState } from 'react';
import * as S from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import api from '../../../services/api';

import { useHistory } from 'react-router';

const Register: React.FC = () => {
  const { push } = useHistory();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async () => {
    try {
      const response = await api.post('/clients', {
          name,
          email,
          password
      });

      if (response.status === 200) {
        push('/')
        setName("")
        setEmail("")
        setPassword("")
      }
    } catch (e) {
      console.log('Erro')
    }
  }

  return (
      <S.Container>
          <S.ImageBackground />

          <S.Content>
            <h1>Adonai</h1>
            <p>Registre sua conta</p>

            <S.Form>
                <Input 
                  placeholder="Nome"  
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                <Button onClick={handleRegister}>Entrar</Button>
            </S.Form>
          </S.Content>
      </S.Container>
  )
}

export default Register;