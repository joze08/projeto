import React from 'react';

import { StoreProvider } from './hook/store';
import Router from './route';

export const App = () => (
  <StoreProvider>
    <Router />
  </StoreProvider>
);
