import React from 'react'
import { useFormik } from 'formik'
import { Alert, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Screen, Img, LoginBox, Input, Button, ButtonText } from './styles'
import { useAuth } from '../../hook/auth'

const Login = () => {
  const { login } = useAuth()
  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      try {
        await login({ email, password })
      } catch (error) {
        console.log(error)
        Alert.alert('Erro', 'Login ou senha inválidos!')
      }
    },
  })

  return (
    <Screen>
      <LoginBox>
        <Img source={require('../../logo.png')} resizeMode="contain" />

        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          placeholder="email@email.com"
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
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
        <Button title="Cadastrar" onPress={() => navigation.navigate('SignUp')}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </LoginBox>
    </Screen>
  )
}

export default Login
