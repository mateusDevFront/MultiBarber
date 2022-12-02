import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const ContainerButton = styled.TouchableOpacity`
  background-color: #11121d;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 5px;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: 500;
`;
export const ContainerColumn = styled.View`
   width: 100%;
   justify-content: center;
   align-items: flex-end;
   padding-right: 20px;
`
interface ItemProps extends TouchableOpacityProps {
  data: {
    id: string;
    customer: string;
    time: string;
  };
}

export function ListShedules({data, ...rest}: ItemProps) {
  return (
    <ContainerButton {...rest}>
      <Icon name="schedule" size={20} color="#fff" />
      <ContainerColumn>
        <Title style={{fontWeight: 'bold'}}>{data?.customer}</Title>
        <Title style={{fontWeight: '300'}}>{'Horário ' +data?.time}</Title>
      </ContainerColumn>
    </ContainerButton>
  );
}
