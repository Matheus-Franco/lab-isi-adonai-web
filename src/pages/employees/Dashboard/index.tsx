import React, { useState } from 'react';
import * as S from './styles';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

const Dashboard: React.FC = () => {
  const [filterItemsIsOpen, setFilterItemsIsOpen] = useState<boolean>(false)

  const toggleOpenFilterItems = () => setFilterItemsIsOpen(!filterItemsIsOpen)

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
          <div>
            olá
          </div>

          <div>
            olá
          </div>

          <div>
            olá
          </div>

          <div>
            olá
          </div>
        </S.AvailableItemsContainer>
      </S.Container>
    </>
  )
}

export default Dashboard;