import React from 'react';

import { ClientAuthProvider } from './clientAuth';
import { AdminAuthProvider } from './adminAuth';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AdminAuthProvider>
      <ClientAuthProvider>
        {children}
      </ClientAuthProvider>
    </AdminAuthProvider>
  )
}

export default AppProvider