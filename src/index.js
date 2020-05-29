import * as React from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native'
import styled from 'styled-components'

import { StoreProvider, useStore } from './store'
import { useAuth } from './auth'

import { Login } from './Login'
import { singIn } from './singIn'

const Loading = styled(ActivityIndicator)`
  flex: 1;
  color: #43bc70;
`

const Home = () => {
  const [{ logout }] = useAuth();
  const singIn = false;

  return (
    <View>
      <Text>Home</Text>
      <Button title="Sair" onPress={logout} />
      <Button title="Cadastrar" onPress={singIn=true} />
    </View>
  )
}

/* SINGIN ROUTE

testa se singIn eh true, se for 
aparece a tela da pagina de cadastro,
se não for ele so segue pro route

*/
const sRoute = () => {
  if (singIn === true) {
    return <singIn />
  }
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^

const Router = () => {
  const [store] = useStore()

  if (!store.rehydrated) {
    return <Loading />
  }

  return store.auth ? <Home /> : <Login />
}



export const App = () => (
  <StoreProvider>
    <Router />
  </StoreProvider>
)
