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
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
  border-radius: 5px;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: 500;
`;

interface ItemProps extends TouchableOpacityProps{
  data: {
    id: string;
    customer: string;
  };
}

export function ListShedules({data, ...rest}: ItemProps) {

  return (
    <ContainerButton {...rest}>
      <Icon name="schedule" size={20} color="#fff" />
      <Title>{data?.customer}</Title>
    </ContainerButton>
  );
}
