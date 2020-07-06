import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState()

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@BIC:token')
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuth({ token })
      }
    }
    loadStorageData()
  }, [])

  const login = useCallback(
    async ({ email, password }) => {
      const response = await api.post('authenticate', { email, password })
      const { token } = response.data
      api.defaults.headers.Authorization = `Bearer ${token}`
      await AsyncStorage.setItem('@BIC:token', token)

      setAuth({ token })
    },
    [AsyncStorage]
  )

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('@BIC:token')
    setAuth()
  }, [AsyncStorage])

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
