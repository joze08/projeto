import React from 'react';
import { useState } from 'react';

import api from './api';

import { ActivityIndicator } from 'react-native';

import { Button, Screen, Img, SignINBox, Text } from './styles';

export const singIn = () => {
  const [state, setState] = useState(false);
  const formec = useFormik({
    initialValues: {
      username: 'test',
      email: 'test',
      password: 'test',
    },

    onSubmit: async (value) => {
      try {
        const { data } = await api.post('register', {
          username,
          email,
          password,
        });
      } catch (error) {
        setState('erro401');
      }
    },
  });

  return (
    <Screen>
      <Img source={require('../../logo.png')} resizeMode="contain" />

      <SignINBox>
        <Text name="username" placeholder="Digite seu usuario" />

        <Text name="e-mail" placeholder="digite seu e-mail" />

        <Text name="password" placeholder="Digite sua senha" />
      </SignINBox>

      <Button onPress={formec.handleSubmit}>
        {formec.isSubmitting ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <ButtonText onPress={formec}>Cadastrar</ButtonText>
        )}
      </Button>
    </Screen>
  );
};

//eh aqui que a magica vai acontecer e onde a gente cadastra o cara
