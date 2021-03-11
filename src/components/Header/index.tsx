import React from 'react';
import * as S from './styles';

import SearchInput from '../SearchInput';

import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi'
import { VscSignOut } from 'react-icons/vsc'

const Header: React.FC = () => {
    return (
        <S.Container>
            <div>
                <FiMenu size={24} />
                <h2>Adonai</h2>
                <SearchInput placeholder="Busque o que deseja" />
            </div>

            <S.UserActions>
                <FiShoppingCart size={24} />
                <FiUser size={24} />
                <VscSignOut size={24} />
            </S.UserActions>
        </S.Container>
    )
}

export default Header;