import styled from 'styled-components';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export const Screen = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Img = styled(Image)`
  margin-bottom: 32px;
  max-width: 300px;
  align-self: center;
`;

export const LoginBox = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const Input = styled(TextInput)`
  background: #ebebeb;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 12px;
`;

export const Button = styled(TouchableOpacity)`
  background: #43bc70;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: #fff;
`;
