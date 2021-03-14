import React, { useState } from 'react';
import * as S from './styles';

import Header from '../../../components/Header';
import Button from '../../../components/Button';

const Dashboard: React.FC = () => {
  const [filterItemsIsOpen, setFilterItemsIsOpen] = useState<boolean>(false)

  const toggleOpenFilterItems = () => setFilterItemsIsOpen(!filterItemsIsOpen)

  const renderFilterItems = filterItemsIsOpen && (
    <S.FilterItems>
      <select>
        <option>Preço</option>
      </select>
      <select>
        <option>Ano</option>
      </select>
      <select>
        <option>Tipo de Operação</option>
      </select>

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