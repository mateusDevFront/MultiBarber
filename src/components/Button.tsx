import React, {useContext} from 'react';
import {TouchableOpacityProps, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {AuthContext} from '../context/AuthContext';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #9d1919;
  width: 100%;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 50px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export function Button({title,style, ...rest}: ButtonProps) {
  const {loadingAuth} = useContext(AuthContext);
  return (
    <ButtonContainer {...rest}>
      {loadingAuth ? (
        <ActivityIndicator size={25} color="#fff" />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </ButtonContainer>
  );
}
