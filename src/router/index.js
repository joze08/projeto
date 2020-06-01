import React from 'react';
import { useStore } from '../hook/store';
import { Loading } from './styles';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Router = () => {
  const [store] = useStore();

  if (!store.rehydrated) {
    return <Loading />;
  }

  return store.auth ? <Home /> : <Login />;
};

export default Router;
