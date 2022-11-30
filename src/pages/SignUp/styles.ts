import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1b1c29;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
`;
export const ContainerLogo = styled.View`
    align-items: center;
`
export const Logo = styled.Image``
export const ContainerInput = styled.View`
  background-color: #11121D;
  border-radius: 50px;
  margin-top: 10px;
`
export const ContainerButton = styled.View`
  align-items: center;
  margin-top: 30px;
`
export const Input = styled.TextInput`
  margin-left: 20px;
  color: #fff;
`
export const TextDescription = styled.Text`
  color: #fff;
  font-weight: 300;
  text-align: center;
`
export const ContainerAlignDescription = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
export const Strong = styled.Text`
  font-weight: bold;
  color: #fff;
`
export const ButtonStrong = styled.TouchableOpacity`
  margin-left: 5px;
`