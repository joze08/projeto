import { View, Text, Button } from 'react-native';
import { useAuth } from '../../hook/auth';

const Home = () => {
  const [{ logout }] = useAuth();
  const singIn = false;

  return (
    <View>
      <Text>Home</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
};

export default Home;
