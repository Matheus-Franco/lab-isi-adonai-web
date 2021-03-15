import React from 'react';
import * as S from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const { push } = useHistory();

  const handleNavigate = () => push('/new-offer');

  return (
      <S.Container>
          <S.Content>
            <h1>Adonai</h1>
            <p>Faça login com a sua conta de Administrador</p>

            <S.Form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" type="password" />
                <Button onClick={handleNavigate}>Entrar</Button>
            </S.Form>
          </S.Content>
      </S.Container>
  )
}

export default Login;