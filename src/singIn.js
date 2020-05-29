import React from 'react';
import { useState } from 'react'
import styled from 'styled-components'

import {
    View,
    Text,
    ActivityIndicator,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

import api from './api';

const Screen = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Img = styled(Image)`
  margin-bottom: 32px;
  max-width: 300px;
  align-self: center;
`

const LoginBox = styled(View)`
  flex: 1;
  padding: 16px;
`

const Input = styled(TextInput)`
  background: #ebebeb;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 12px;
`
const Button = styled(TouchableOpacity)`
  background: #43bc70;
  padding: 12px;
  border-radius: 5px;
  align-items: center;
`

const ButtonText = styled(Text)`
  color: #fff;
`

//eh aqui que a magica vai acontecer e onde a gente cadastra o cara