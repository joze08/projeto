import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { useAuth } from '../../hook/auth'

const Home = () => {
  const { logout } = useAuth()

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Sair" onPress={logout} />
    </SafeAreaView>
  )
}

export default Home
