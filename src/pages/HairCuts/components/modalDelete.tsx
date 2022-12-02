import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {HairCutItemProps} from '../index';
import {Button} from '../../../components/Button';

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ContainerItems = styled.View`
  width: 60%;
  border: 2px;
  border-color: #9d1919;
  background-color: #11121d;
  border-radius: 8px;
  padding-top: 20px;
`;
export const Title = styled.Text`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;
export const ContainerButton = styled.View`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 25px;
`;
interface ModalInfoProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClosed?: () => void | undefined;
  data?: HairCutItemProps;
  onFinishHairCut: () => Promise<void>;
}

export default function ModalDelete({onClosed, data, onFinishHairCut}: ModalInfoProps) {
  return (
    <Container onPress={onClosed} activeOpacity={10}>
      <ContainerItems>
        <Title>Em desenvolvimento...</Title>

        <ContainerButton>
          <Button
          onPress={onFinishHairCut}
          title="Deletar" />
        </ContainerButton>
      </ContainerItems>
    </Container>
  );
}
