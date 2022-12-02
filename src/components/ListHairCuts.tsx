import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps, Image} from 'react-native';

import Barber from '../assets/icon.png';

export const ContainerButton = styled.TouchableOpacity`
  background-color: #11121d;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
`;
export const ContainerInform = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  padding-right: 80px;
`;
interface ItemProps extends TouchableOpacityProps {
  data: {
    id: string;
    name: string;
    price: number | string;
  };
}

export function ListHairCuts({data, ...rest}: ItemProps) {
  return (
    <ContainerButton {...rest}>
      {/* {<Icon name="bookmark" size={50} color="#9d1919" />} */}
      <Image
        source={Barber}
        style={{
          resizeMode: 'contain',
          height: '80%',
          marginLeft: -10,
          marginTop: 5,
        }}
      />
      <ContainerInform>
        <Title>{data?.name}</Title>
        {
          <Title style={{color: '#fff', fontWeight: '300'}}>
            {'R$ ' + data?.price}
          </Title>
        }
      </ContainerInform>
    </ContainerButton>
  );
}
