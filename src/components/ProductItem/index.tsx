/* eslint-disable jsx-a11y/alt-text */
import React, { ImgHTMLAttributes } from 'react';
import * as S from './styles';

interface IProductItemProps extends ImgHTMLAttributes<HTMLImageElement> {
    productName: string
}

const ProductItem: React.FC<IProductItemProps> = ({ productName, ...props }) => {
    return (
        <S.Container>
                <img {...props} />
                <div>
                    <p>{productName}</p>
                    <a href="#">Ver detalhes</a>
                </div>
        </S.Container>
    )
}

export default ProductItem;