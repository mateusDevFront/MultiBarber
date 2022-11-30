import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AuthContext} from '../context/AuthContext'

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const {isAuthenticated, loading} = useContext(AuthContext)

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1b1c29',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={60} color="red" />
      </View>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
export default Routes;