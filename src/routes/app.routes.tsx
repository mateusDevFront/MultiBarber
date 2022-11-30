import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainTab from './mainTab';
import CusttomTabs from '../components/CustomTabs';

import {StackPramsList} from '../routes/mainTab'


const Tab = createBottomTabNavigator<StackPramsList>();

function AppRoutes() {
  return (
    <Tab.Navigator tabBar={props => <CusttomTabs {...props} />}>
      <Tab.Screen
        options={{headerShown: false}}
        name="MainTab"
        component={MainTab}
      />
    </Tab.Navigator>
  );
}
export default AppRoutes;
