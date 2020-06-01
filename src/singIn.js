import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import api from './api';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
 
 
const bnt = styled(TouchableOpacity)`
 background: #43bc70;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
`

const Img = styled(Image)`
  margin-bottom: 24px;
  max-width: 200px;
  align-self: center;
`
 
const SignINBox = styled(View)`
  flex: 1;
  padding: 16px;
`
 
const Text = styled(TextInput)`
padding:32px;
flex:0,5;
`

export const singIn = () => {

  const [state, setState] = useState(false)
  const formec = useFormik({
    initialValues: {
      username: 'test',
      email: 'test',
      password: 'test',
    },

    onSubmit: async value => {
      try {
        const { data } = await api.post("register", {username, email, password})
      } catch (error) {
        setState('erro401')
      }
    },
  })

  return(
    <Screen>
      <Img source={require('./logo.png')} resizeMode="contain"/>
      
      <SignINBox>
        <Text
                  name="username"
                  placeholder="Digite seu usuario"
                />
        
        <Text
                name="e-mail"
                placeholder="digite seu e-mail"
        />
        
        <Text
                  name="password"
                  placeholder="Digite sua senha"
                />
      </SignINBox>
        
      <Button onPress={formec.handleSubmit}>
        {formec.isSubmitting ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <ButtonText onPress={formec} >Cadastrar</ButtonText>
                )}
      </Button>
    </Screen>
    )
  }



//eh aqui que a magica vai acontecer e onde a gente cadastra o cara