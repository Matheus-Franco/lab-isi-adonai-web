import React from 'react';
import * as S from './styles';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ImageCar from '../../../assets/carimage.png'

const ProductDetails: React.FC = () => {
    return (
        <>
            <Header />
            <S.Container>
                <S.Image>
                    <img src={ImageCar} alt="" />
                </S.Image>

                <S.Details>
                    <h1>BMW 320i</h1>

                    <div className="description">
                        <h4>Informações</h4>
                        <p>
                            The start() and stop() functions in the IEngine interface both accept a callback function. The callback function must accept two parameters of type boolean and string.
                        </p>
                    </div>

                    <div className="price">
                        <h4>Preço</h4>
                        <h2>R$ 134.000</h2>
                        <Button>Entrar em contato</Button>
                    </div>
                </S.Details>
            </S.Container>
        </>
    )
}

export default ProductDetails;