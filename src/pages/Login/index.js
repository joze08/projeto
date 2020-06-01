import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Text, ActivityIndicator } from 'react-native';

import { Screen, Img, LoginBox, Input, Button, ButtonText } from './styles';
import api from './api';
import { useAuth } from './auth';

export const Login = () => {
  const [state, setState] = useState(false);
  const [, { login }] = useAuth();

  const formik = useFormik({
    initialValues: {
      username: 'test',
      password: 'test',
    },

    onSubmit: async (values) => {
      try {
        const { data } = await api.get('authenticate', { username, passaword });
        login(data);
      } catch (error) {
        setState('Login ou senha inválidos');
      }
    },
  });

  return (
    <Screen>
      <LoginBox>
        <Img source={require('../../logo.png')} resizeMode="contain" />

        {state && <Text>{state}</Text>}

        <Input
          name="username"
          placeholder="Digite seu usuario"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />

        <Input
          name="password"
          placeholder="Digite sua senha"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
        />

        <Button onPress={formik.handleSubmit}>
          {formik.isSubmitting ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
        <Button title="Cadastrar" onPress={(cadastro = true)} />
      </LoginBox>
    </Screen>
  );
};
