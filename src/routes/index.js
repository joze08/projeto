import React from 'react'
import AuthRoutes from './auth'
import AppRoutes from './app'
import { useAuth } from '../hook/auth'

const Routes = () => {
  const { auth } = useAuth()
  console.log(auth)
  return auth ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
