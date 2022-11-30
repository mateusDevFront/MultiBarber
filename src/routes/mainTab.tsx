import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Schedule from '../pages/Schedules';
import HairCuts from '../pages/HairCuts';
import Account from '../pages/Account';
import Planos from '../pages/Planos';

export type StackPramsList = {
  Schedule: undefined;
  HairCuts: undefined;
  Account: undefined;
  Planos: undefined;
};

const Stack = createNativeStackNavigator<StackPramsList>();

export default function MainTab() {
  return (
    <Stack.Navigator initialRouteName="Schedule">
      <Stack.Screen
        options={{headerShown: false}}
        name="Schedule"
        component={Schedule}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="HairCuts"
        component={HairCuts}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Account"
        component={Account}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Planos"
        component={Planos}
      />
    </Stack.Navigator>
  );
}
