import React from 'react';
import * as S from './styles';

import Input from '../../../components/Input';

const Login: React.FC = () => {
  return (
      <S.Container>
          <S.ImageBackground />

          <S.Content>
              <div>
                <h1>Adonai</h1>
                <p>Faça login com a sua conta</p>
              </div>

              <S.Form>
                  <Input placeholder="E-mail" />
                  <Input placeholder="Senha" />
                  <button>
                      Entrar
                  </button>
              </S.Form>
          </S.Content>
      </S.Container>
  )
}

export default Login;