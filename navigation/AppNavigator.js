// Librairies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppDrawerNavigator } from './Navigators';

function AppNavigator() {
  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
