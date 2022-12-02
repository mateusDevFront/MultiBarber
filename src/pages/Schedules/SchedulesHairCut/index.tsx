import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import {
  Container,
  BoxCadasterHairCut,
  BoxInputName,
  Input,
  CategoryHairCut,
  ButtonOpenCategory,
  Text,
} from './styles';
import {api} from '../../../services/api';
import {Button} from '../../../components/Button';
import {Modal} from 'react-native';
import ModalPicker from '../components/modalPicker';

export interface HairCutProps {
  [x: string]: any;
  id: string;
  name: string;
  price: string;
  time: string;
  status: boolean;
  user_id: string;
  subscriptions: boolean;
}
interface NewProps {
  haircuts: HairCutProps[];
}

export default function SchedulesHairCut({haircuts}: NewProps) {
  const [nameClient, setNameClient] = useState('');
  const [time, setTime] = useState('');

  const [hairCutList, setHairCutList] = useState(haircuts || [{}]);
  const [hairCutSelect, setHaircutSelect] = useState(hairCutList[0]);

  const [mounted, setMounted] = useState(hairCutList);

  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<HairCutProps>();

  useEffect(() => {
    async function getHairCuts() {
      const response = await api.get('/haircuts', {
        params: {
          status: true,
        },
      });
      setItems(response.data);
    }
    getHairCuts();
  }, [mounted || false]);

  function handleChange(item: HairCutProps) {
    const hairCutItemSelected = item;
    setHaircutSelect(hairCutItemSelected);
  }

  async function handleCadasterClient() {
    if (nameClient === '' || hairCutSelect === null) {
      Toast.show({
        type: 'error',
        text1: 'Preencha o agendamento correntamente :)',
        position: 'bottom',
        topOffset: 70,
      });
    }
    try {
      const response = await api.post('/shedule', {
        customer: nameClient,
        time: time,
        haircut_id: hairCutSelect?.id,
      });
      Toast.show({
        type: 'success',
        text1: 'Agendamento feito com sucesso',
        position: 'bottom',
        topOffset: 70,
      });
      setNameClient('');
      setTime('');
    } catch (err) {
      console.log('erro ao cadatra', err);
    }
  }

  return (
    <Container>
      <BoxCadasterHairCut>
        <BoxInputName>
          <Input
            value={nameClient}
            onChangeText={e => setNameClient(e)}
            placeholder="Cliente"
            placeholderTextColor="#878787"
          />
        </BoxInputName>
        <BoxInputName style={{marginTop: 15}}>
          <Input
            value={time}
            keyboardType="numbers-and-punctuation"
            onChangeText={e => setTime(e)}
            placeholder="Horário"
            placeholderTextColor="#878787"
          />
        </BoxInputName>
        <BoxInputName
          style={{
            paddingRight: 10,
            marginTop: 15,
            marginBottom: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CategoryHairCut>
            {hairCutSelect?.name ? hairCutSelect?.name : 'Escolha um corte'}
          </CategoryHairCut>
          <ButtonOpenCategory onPress={() => setModalVisible(true)}>
            <Icon name="arrow-drop-down" color="#fff" size={30} />
          </ButtonOpenCategory>
        </BoxInputName>

        <Button onPress={() => handleCadasterClient()} title="Agendar" />
      </BoxCadasterHairCut>
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <ModalPicker
          isOpen={modalVisible}
          onClosed={() => setModalVisible(false)}
          data={items}
          selectedHairCut={handleChange}
        />
      </Modal>
      <Toast />
    </Container>
  );
}
