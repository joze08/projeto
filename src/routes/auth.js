import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
const Auth = createStackNavigator()
const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
)

export default AuthRoutes
