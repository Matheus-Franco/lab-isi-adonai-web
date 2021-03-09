import React from 'react';

import GlobalStyle from './styles/globalStyle'
import Login from './pages/employees/Login';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  )
}

export default App;
