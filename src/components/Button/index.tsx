import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
};

const Button: React.FC<IButtonProps> = ({ children, loading, ...props }) => {
  const renderChildren = loading ? 'Carregando...' : children

  return (
      <S.Container type="button" {...props}>
          {renderChildren}
      </S.Container>
  )
}

export default Button;