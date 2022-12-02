import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Nav} from '../routes/mainTab'

export const TabArea = styled.View`
  height: 50px;
  border-top: 1px solid #fff;
  background-color: #0b0c14;
  flex-direction: row;
  justify-content: space-between;
  border-top-color: #2b2d47;
  border-top-width: 2px;
`;
export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TabItemCenter = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export default function CusttomTabs() {
  const {navigate} = useNavigation<Nav>();

  const goTo = (screenName: string) => {
    navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Schedule')}>
        <Icon name="content-paste" size={24} color="#fff" />
      </TabItem>
      <TabItem onPress={() => goTo('HairCuts')}>
        <Icon name="face" size={24} color="#fff" />
      </TabItem>
      <TabItem onPress={() => navigate('Planos')}>
        <Icon name="add-business" size={24} color="#fff" />
      </TabItem>
      <TabItem onPress={() => navigate('Account')}>
        <Icon name="account-circle" size={24} color="#fff" />
      </TabItem>
    </TabArea>
  );
}
