import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import Horarios from './src/pages/Horarios'



const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Horarios: Horarios
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);