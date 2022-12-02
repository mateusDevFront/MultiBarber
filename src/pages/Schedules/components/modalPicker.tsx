import React from 'react';
import styled from 'styled-components/native';
import {HairCutProps} from '../SchedulesHairCut/index';
import {ScrollView} from 'react-native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ContainerItems = styled.View`
  width: 80%;
  height: 290px;
  border: 2px;
  border-color: #2b2d47;
  background-color: #11121d;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const NameHairCuts = styled.Text`
  color: #fff;
  font-size: 17px;
  margin-top: 5px;
`;
export const PriceHairCuts = styled.Text`
  color: #0aff4f;
  font-size: 17px;
  margin-right: 15px;
  margin-top: 5px;
`;
export const ButtonSelected = styled.TouchableOpacity`
  background-color: #1b1c29;
  margin-bottom: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  border-radius: 5px;
  border: 2px;
  border-color: #1f2134;
`;

interface ModalInfoProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClosed: () => void;
  data?: HairCutProps;
  selectedHairCut: (item: HairCutProps) => void;
}

export default function ModalPicker({
  onClosed,
  selectedHairCut,
  data,
}: ModalInfoProps) {
  async function handleSelect(item: HairCutProps) {
    selectedHairCut(item);
    onClosed();
  }

  return (
    <Container onPress={onClosed} activeOpacity={10}>
      <ContainerItems>
        <ScrollView>
          {data?.map(
            (item: HairCutProps, index: React.Key | null | undefined) => (
              <ButtonSelected key={index} onPress={() => handleSelect(item)}>
                <NameHairCuts>{item?.name}</NameHairCuts>
                <PriceHairCuts>{'R$ ' + item?.price}</PriceHairCuts>
              </ButtonSelected>
            ),
          )}
        </ScrollView>
      </ContainerItems>
    </Container>
  );
}
