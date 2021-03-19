import React, { useEffect, useState } from 'react';
import * as S from './styles';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ImageCar from '../../../assets/carimage.png'
import api from '../../../services/api';

import { useLocation } from 'react-router';

interface IOfferType {
    title: string;
    id: string;
    price: string;
    year_model: string;
    description: string;
  }

const ProductDetails: React.FC = () => {
    const { pathname } = useLocation();

    const [productDetailed, setProductDetailed] = useState<IOfferType>({} as IOfferType);

    useEffect(() => { getProductDetailed() }, [])

    const id = pathname.split("/")[2]

    const getProductDetailed = async () => {
        const response = await api.get(`offers/${id}`);

        if (response.status === 200) {
            setProductDetailed(response.data);
        }
    }

    return (
        <>
            <Header />
            <S.Container>
                <S.Image>
                    <img src={ImageCar} alt="" />
                </S.Image>

                <S.Details>
                    <h1>{productDetailed && productDetailed.title}</h1>

                    <div className="description">
                        <h4>Informações</h4>
                        <p>
                            {productDetailed && productDetailed.description}
                        </p>
                    </div>

                    <div className="price">
                        <h4>Preço</h4>
                        <h2>{productDetailed && productDetailed.price}</h2>
                        <Button>Entrar em contato</Button>
                    </div>
                </S.Details>
            </S.Container>
        </>
    )
}

export default ProductDetails;