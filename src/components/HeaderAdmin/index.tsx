import React from 'react';
import * as S from './styles';

import { VscSignOut } from 'react-icons/vsc';
import { useHistory } from 'react-router';

const HeaderAdmin: React.FC = () => {
    const { push } = useHistory();

    const handleNavigate = () => push('/admin');

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
                <VscSignOut size={24} onClick={handleNavigate} />
            </S.UserActions>
        </S.Container>
    )
}

export default HeaderAdmin;