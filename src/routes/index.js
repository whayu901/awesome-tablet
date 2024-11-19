import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import SendDataScreen from '../screens/SendDataScreen';

const Stack = createNativeStackNavigator();

const NavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Equipment" component={EquipmentScreen} />
        <Stack.Screen name="QRCode" component={QRCodeScreen} />
        <Stack.Screen name="SendData" component={SendDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoute;