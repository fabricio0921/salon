import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './src/pages/FirstPage';
import Login from './src/pages/Login';
import Salon from './src/pages/Salon';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Firstpage" component={FirstPage} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Salon" component={Salon} options={{headerShown: false}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

