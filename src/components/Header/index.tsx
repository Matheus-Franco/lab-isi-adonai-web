import React from 'react';
import * as S from './styles';

const Header: React.FC = () => {
    return (
        <S.Container>
            <div>
                <S.Icon>menu</S.Icon>
                <h2>Adonai</h2>
            </div>
            <div>
                <S.Icon>cart</S.Icon>
                <S.Icon>user</S.Icon>
                <S.Icon>signout</S.Icon>
            </div>
        </S.Container>
    )
}

export default Header;