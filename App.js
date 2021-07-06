/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/Dashboard';
import { Platform } from 'react-native';
import MainPage from './src/MainPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
