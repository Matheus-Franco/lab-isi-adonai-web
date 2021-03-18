import React from 'react';

import { ClientAuthProvider } from './clientAuth';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ClientAuthProvider>
        {children}
    </ClientAuthProvider>
  )
}

export default AppProvider