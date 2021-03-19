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
  id: string;
  price: string;
  year_model: string
}

const Dashboard: React.FC = () => {
  const [filterItemsIsOpen, setFilterItemsIsOpen] = useState<boolean>(false)
  const [offers, setOffers] = useState<IOfferType[]>([]);
  const [pricesData, setPricesData] = useState<string[]>([]);
  const [yearModelsData, setYearModelsData] = useState<string[]>([]);
  const [titlesData, setTitlesData] = useState<string[]>([]);
  const [yearModelFilter, setYearModelFilter] = useState<string>("")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { handleGetCreatedOffers() }, []);

  const handleGetCreatedOffers = async () => {
    const response = await api.get('/offers', {
      params: {
        year_model: yearModelFilter
      }
    });
    
    if (response.status === 200) {
      setOffers(response.data);
      
      if (!yearModelFilter) {
        getPrices(response.data);
        getYearModels(response.data);
        getTitles(response.data);
      }
    }
  }

  const getPrices = (offers: IOfferType[]) => {
    const prices = offers.map(offer => offer.price);

    const noRepeatOffers = new Set(prices);

    setPricesData(Array.from(noRepeatOffers));
  }

  const getYearModels = (offers: IOfferType[]) => {
    const yearModels = offers.map(offer => offer.year_model);

    const noRepeatYearModels = new Set(yearModels)

    setYearModelsData(Array.from(noRepeatYearModels))
  }

  const getTitles = (offers: IOfferType[]) => {
    const titles = offers.map(offer => offer.title);

    const noRepeatTitles = new Set(titles)

    setTitlesData(Array.from(noRepeatTitles))
  }
  
  const toggleOpenFilterItems = () => setFilterItemsIsOpen(!filterItemsIsOpen)
  
  const renderOffers = offers && offers.map(offer => 
    <ProductItem key={offer.id} src={ImageCar} productName={offer.title} productId={offer.id} />
  )

  const renderFilterItems = filterItemsIsOpen && (
    <S.FilterItems>
      <Select firstOption="Preço" optionsArray={pricesData} />
      <Select 
          firstOption="Ano" 
          optionsArray={yearModelsData} 
          value={yearModelFilter} 
          onChange={(e) => setYearModelFilter(e.target.value)} 
      />
      <Select firstOption="Nome da oferta" optionsArray={titlesData} />
      <Button onClick={handleGetCreatedOffers}>Aplicar</Button>
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