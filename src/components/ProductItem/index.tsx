/* eslint-disable jsx-a11y/alt-text */
import React, { ImgHTMLAttributes } from 'react';
import * as S from './styles';

import { useHistory } from 'react-router';

interface IProductItemProps extends ImgHTMLAttributes<HTMLImageElement> {
    productName: string
    productId?: string
}

const ProductItem: React.FC<IProductItemProps> = ({ productName, productId, ...props }) => {
    const { push } = useHistory();
    
    const handleNavigate = () => push('/product-details');

    return (
        <S.Container>
                <img {...props} />
                <div>
                    <p>{productName}</p>
                    <a href="#" onClick={handleNavigate}>Ver detalhes</a>
                </div>
        </S.Container>
    )
}

export default ProductItem;