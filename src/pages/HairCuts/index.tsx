import React, {useState, useEffect} from 'react';
import {api} from '../../services/api';
import {Container, Title} from './styles';
import {ListHairCuts} from '../../components/ListHairCuts';
import {View, Text, ScrollView, Modal} from 'react-native';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import ModalDelete from './components/modalDelete';

export interface HairCutItemProps {
  id: string;
  name: string;
  price: number | string;
  status: boolean;
  user_id: string;
}
interface HairCutProps {
  haircuts: HairCutItemProps[];
}
type Nav = {
  navigate: (value: string) => void;
};

export default function HairCuts({haircuts}: HairCutProps) {
  const {navigate} = useNavigation<Nav>();

  const [modalVisible, setModalVisible] = useState(false);

  const [haircutList, setHhaircutList] = useState(haircuts || []);

  const [items, setItems] = useState<HairCutItemProps>();

  useEffect(() => {
    async function getHairCuts() {
      try {
        const response = await api.get('/haircuts', {
          params: {
            status: true,
          },
        });
        setHhaircutList(response.data);
      } catch (err) {
        console.log('erro na busca', err);
      }
    }
    getHairCuts();
  }, [haircutList]);

  function handleOpenModal(item: HairCutItemProps) {
    setItems(item);
    setModalVisible(true);
  }

  function handleDeletHairCut() {
    setModalVisible(false);
  }

  return (
    <Container>
      <Title>Seus cortes {'\n'}cadastrados</Title>

      {haircutList?.length === 0 && (
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#ccc'}}>
            Não há cortes cadastrados no momento
          </Text>
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {haircutList.map((item, index) => (
          <View key={index}>
            <ListHairCuts
              onPress={() => handleOpenModal(item)}
              activeOpacity={0.7}
              data={item}
            />
          </View>
        ))}
      </ScrollView>

      {haircutList.length === 3 ? (
        <Button
          activeOpacity={0.5}
          title="Limite gratuíto atingido"
          onPress={() => navigate('Planos')}
        />
      ) : (
        <Button
          activeOpacity={0.5}
          title="Cadastrar novo corte"
          onPress={() => navigate('NewHairCuts')}
        />
      )}

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <ModalDelete
          isOpen={modalVisible}
          onFinishHairCut={()=> handleDeletHairCut()}
          data={items}
        />
      </Modal>
    </Container>
  );
}
