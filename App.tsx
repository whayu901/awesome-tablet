import React from 'react';
import {enableScreens} from 'react-native-screens';
import MainNavigator from './src/routes';

enableScreens(false);

const App = () => {
  return <MainNavigator />;
};

export default App;
