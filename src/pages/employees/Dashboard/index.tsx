import React from 'react';
import * as S from './styles';

import Header from '../../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
          <S.FilterSidebar>
            filter menu
          </S.FilterSidebar>

          <S.Content>
            main content
          </S.Content>
      </S.Container>
    </>
  )
}

export default Dashboard;