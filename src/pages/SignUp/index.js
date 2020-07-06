import React from 'react'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'

import { ActivityIndicator, Alert } from 'react-native'

import { Button, Screen, Img, SignUpBox, Input, ButtonText } from './styles'

const SignUp = () => {
  const navigation = useNavigation()
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async ({ username, email, password }) => {
      try {
        await api.post('register', {
          username,
          email,
          password,
        })
        navigation.navigate('Login')
      } catch (error) {
        console.log(error)
        Alert.alert('Erro', 'Username ou E-mail já cadastrado!')
      }
    },
  })

  return (
    <Screen>
      <SignUpBox>
        <Img source={require('../../logo.png')} resizeMode="contain" />

        <Input
          name="username"
          placeholder="Digite seu usuario"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          returnKeyType="next"
        />

        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="e-mail"
          placeholder="digite seu e-mail"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          returnKeyType="next"
        />

        <Input
          name="password"
          placeholder="Digite sua senha"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => {
            formik.handleSubmit()
          }}
        />

        <Button onPress={formik.handleSubmit}>
          {formik.isSubmitting ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <ButtonText>Cadastrar</ButtonText>
          )}
        </Button>
        <Button title="Login" onPress={() => navigation.navigate('Login')}>
          <ButtonText>Login</ButtonText>
        </Button>
      </SignUpBox>
    </Screen>
  )
}
export default SignUp
//eh aqui que a magica vai acontecer e onde a gente cadastra o cara
