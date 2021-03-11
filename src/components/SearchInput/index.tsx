import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

import { AiOutlineSearch } from 'react-icons/ai'

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
      <S.Container>
          <input type="text" {...props} />
          
          <button>
            <AiOutlineSearch size={18} />
          </button>
      </S.Container>
  )
}

export default SearchInput;