import React, { useEffect, useState } from 'react';
import * as S from './styles';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import ImageCar from '../../../assets/carimage.png'
import ProductItem from '../../../components/ProductItem';
import api from '../../../services/api';

interface IOfferType {
  title: string;
}

const Dashboard: React.FC = () => {
  const [filterItemsIsOpen, setFilterItemsIsOpen] = useState<boolean>(false)
  const [offers, setOffers] = useState<IOfferType[]>([]);

  useEffect(() => { handleGetCreatedOffers() }, []);

  const handleGetCreatedOffers = async () => {
    const response = await api.get('/offers');
    
    setOffers(response.data);
  }
  
  const toggleOpenFilterItems = () => setFilterItemsIsOpen(!filterItemsIsOpen)
  
  const renderOffers = offers && offers.map(offer => <ProductItem src={ImageCar} productName={offer.title} />)

  const renderFilterItems = filterItemsIsOpen && (
    <S.FilterItems>
      <Select firstOption="Preço" optionsArray={['29,9', '49,9']} />
      <Select firstOption="Ano" optionsArray={['2015', '2018']} />
      <Select firstOption="Tipo de Operação" optionsArray={['Compra', 'Venda']} />
      <Button>Aplicar</Button>
    </S.FilterItems>
  )

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>
          <h1>Nossos veículos disponíveis</h1>
          <Button onClick={toggleOpenFilterItems}>
            Filtros
          </Button>
        </S.Title>

        {renderFilterItems}

        <S.AvailableItemsContainer>
          {renderOffers}
        </S.AvailableItemsContainer>
      </S.Container>
    </>
  )
}

export default Dashboard;