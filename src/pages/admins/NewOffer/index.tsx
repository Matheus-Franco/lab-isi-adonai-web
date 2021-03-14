import React from 'react';
import * as S from './styles';

import LabelInput from '../../../components/LabelInput';
import Button from '../../../components/Button';

const NewOffer: React.FC = () => {
    return (
        <>
            <S.Container>
                <S.Title>
                    <h1>Registre uma nova oferta</h1>
                </S.Title>

                <S.Form>
                    <LabelInput fieldIsRequired label="Titulo do anúncio" placeholder="asdf" />

                    <div className="textarea">
                        <p>* Descrição</p>
                        <textarea />
                    </div>

                    <LabelInput fieldIsRequired label="Valor total" placeholder="asdf" />
                    <LabelInput fieldIsRequired label="Imagem" placeholder="asdf" />

                    <Button>
                        Enviar nova oferta
                    </Button>
                </S.Form>
            </S.Container>
        </>
    )
}

export default NewOffer;