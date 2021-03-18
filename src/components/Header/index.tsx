import React from 'react';
import * as S from './styles';

import SearchInput from '../SearchInput';

import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi'
import { VscSignOut } from 'react-icons/vsc'
import { useHistory } from 'react-router';
import { useClientAuth } from '../../hooks/clientAuth';

const Header: React.FC = () => {
    const { push } = useHistory();
    const { signOut } = useClientAuth();

    const handleSignOut = () => {
        signOut();

        push('/');
    };

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
                <VscSignOut size={24} onClick={handleSignOut} />
            </S.UserActions>
        </S.Container>
    )
}

export default Header;