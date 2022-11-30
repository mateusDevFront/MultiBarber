import 'react-native-gesture-handler'
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar
            translucent={true}
            barStyle="light-content"
            backgroundColor="transparent"
          />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
