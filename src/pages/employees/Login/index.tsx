import React from 'react';
import * as S from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Login: React.FC = () => {
  return (
      <S.Container>
          <S.ImageBackground />

          <S.Content>
            <h1>Adonai</h1>
            <p>Faça login com a sua conta</p>

            <S.Form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" type="password" />
                <Button>Entrar</Button>
            </S.Form>
          </S.Content>
      </S.Container>
  )
}

export default Login;