import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Schedule from '../pages/Schedules';
import HairCuts from '../pages/HairCuts';
import Account from '../pages/Account';
import Planos from '../pages/Planos';
import SchedulesHairCut from '../pages/Schedules/SchedulesHairCut';
import NewHairCuts from '../pages/HairCuts/NewHairCuts';

export type StackPramsList = {
  Schedule: undefined;
  HairCuts: undefined;
  Account: undefined;
  Planos: undefined;
  SchedulesHairCut: undefined;
  NewHairCuts: undefined
};

export type Nav = {
  navigate: (value: string) => void;
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
        options={{
          title: 'Novo Agendamento',
          headerStyle: {
            backgroundColor: '#1b1c29',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
        name="SchedulesHairCut"
        component={SchedulesHairCut}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="HairCuts"
        component={HairCuts}
      />
      <Stack.Screen
        options={{
          title: 'Novo Corte',
          headerStyle: {
            backgroundColor: '#1b1c29',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
        name="NewHairCuts"
        component={NewHairCuts}
      />
      
      <Stack.Screen
        options={{
          title: 'Planos',
          headerStyle: {
            backgroundColor: '#1b1c29',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
        name="Planos"
        component={Planos}
      />
      
      <Stack.Screen
        options={{
          title: 'Minha Conta',
          headerStyle: {
            backgroundColor: '#1b1c29',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
        name="Account"
        component={Account}
      />
    </Stack.Navigator>
  );
}
