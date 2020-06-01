import styled from 'styled-components';

import { View, TextInput, TouchableOpacity, Image } from 'react-native';

export const Button = styled(TouchableOpacity)`
  background: #43bc70;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
`;

export const Img = styled(Image)`
  margin-bottom: 24px;
  max-width: 200px;
  align-self: center;
`;

export const SignINBox = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const Screen = styled(View)`
  flex: 1;
  padding: 16px;
`;
export const Text = styled(TextInput)`
  padding: 32px;
  flex: 0.5;
`;
