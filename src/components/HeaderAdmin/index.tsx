import React from 'react';
import * as S from './styles';

import { VscSignOut } from 'react-icons/vsc';

const HeaderAdmin: React.FC = () => {
    return (
        <S.Container>
            <div>
                <div>
                    <h2>Adonai</h2>
                </div>

                <S.NavOptions>
                    <p>Nova oferta</p>
                    <p>Solicitações de Clientes</p>
                </S.NavOptions>
            </div>

            <S.UserActions>
                <VscSignOut size={24} />
            </S.UserActions>
        </S.Container>
    )
}

export default HeaderAdmin;