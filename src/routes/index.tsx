import React, {useContext} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Logo from '../assets/Logo.png';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const {isAuthenticated, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1b1c29',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} />
        <ActivityIndicator size={30} color="#9d1919" />
      </View>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
export default Routes;
