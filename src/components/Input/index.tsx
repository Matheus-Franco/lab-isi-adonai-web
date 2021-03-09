import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
      <S.Container>
          <input {...props} />
      </S.Container>
  )
}

export default Input;