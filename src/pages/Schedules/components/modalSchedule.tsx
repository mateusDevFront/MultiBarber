import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SchedulesPropsItems} from '../index';
import styled from 'styled-components/native';
import {Button} from '../../../components/Button';

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ContainerItems = styled.View`
  width: 69%;
  justify-content: center;
  background-color: #11121d;
  border-radius: 10px;
  padding: 25px;
`;
export const ContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TitleDetail = styled.Text`
  font-weight: bold;
  color: #fff;
`;
export const ContainerListDetail = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const Name = styled.Text`
  color: #fff;
  font-weight: 300;
  margin-left: 7px;
`;
export const HairCut = styled.Text`
  color: #fff;
  font-weight: 300;
  margin-left: 7px;
`;
export const Price = styled.Text`
  color: #fff;
  font-weight: 300;
  margin-left: 7px;
`;
export const ButtonClosedModal = styled.TouchableOpacity``;
export const Align = styled.View`
  flex-direction: row;
`;

interface ModalInfoProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClosed?: () => void | undefined;
  data?: SchedulesPropsItems;
  finishSchedule: () => Promise<void>;
}

export default function ModalSchedule({
  onClosed,
  data,
  finishSchedule,
}: ModalInfoProps) {
  return (
    <Container onPress={onClosed} activeOpacity={10}>
      <ContainerItems>
        <ContainerTitle>
          <TitleDetail>Detalhes do Clientes</TitleDetail>
          <ButtonClosedModal onPress={onClosed}>
            <Icon name="cancel" color="#9D1919" size={25} />
          </ButtonClosedModal>
        </ContainerTitle>
        <ContainerListDetail>
          <Align>
            <Icon name="mood" color="#0AFF4F" size={20} />
            <Name>{data?.customer}</Name>
          </Align>
          <Align style={{marginTop: 15}}>
            <Icon name="verified" color="#0AFF4F" size={18} />
            <HairCut>{data?.haircut?.name}</HairCut>
          </Align>
          <Align style={{marginTop: 15}}>
            <Icon name="attach-money" color="#0AFF4F" size={20} />
            <Price>{data?.haircut?.price}</Price>
          </Align>
          <Align style={{marginTop: 15}}>
            <Icon name="access-time" color="#0AFF4F" size={20} />
            <Price>{data?.time}</Price>
          </Align>
        </ContainerListDetail>
        <Button onPress={() => finishSchedule()} title="Finalizar cliente" />
      </ContainerItems>
    </Container>
  );
}
