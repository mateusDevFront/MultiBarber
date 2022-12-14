import React, {useContext, useState, useEffect} from 'react';
import {api} from '../../services/api';
import {Container, Title, HelloTitle} from './styles';
import {ListShedules} from '../../components/ListSchedules';
import {AuthContext} from '../../context/AuthContext';
import {View, Text, ScrollView, Modal} from 'react-native';
import ModalInfo from './components/modalSchedule';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Nav} from '../../routes/mainTab'
export interface SchedulesPropsItems {
  id: string;
  customer: string;
  time: string;
  haircut: {
    id: string;
    name: string;
    price: string;
    user_id: string;
  };
}
interface ShedulesProps {
  schedules: SchedulesPropsItems[];
}

export default function Schedule({schedules}: ShedulesProps) {
  const {user} = useContext(AuthContext);
  const {navigate} = useNavigation<Nav>();

  const [schedulesList, setSchedulesList] = useState(schedules || []);
  const [hellow, setHellow] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<SchedulesPropsItems>();
  
  useEffect(() => {
    async function getSearchSchedules() {
      const response = await api.get('/shedule');
      setSchedulesList(response.data);
    }
    getSearchSchedules();
  }, [schedulesList]);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setHellow('Bom Dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setHellow('Boa Tarde');
    } else {
      setHellow('Boa noite');
    }
  }, []);

  function handleOpenModal(item: SchedulesPropsItems) {
    setItems(item);
    setModalVisible(true);
  }

  function closedModalDetail() {
    setModalVisible(false);
  }

  async function handleFinish(id: string) {
    try {
      const response = await api.delete('/shedule', {
        params: {
          shedule_id: id,
        },
      });
      //deletando item do estado!
      const filterItem = schedulesList.filter(item => {
        return item?.id !== id;
      });
      setSchedulesList(filterItem);
      setModalVisible(false);
    } catch (err) {
      console.log('erro', err);
      setModalVisible(false);
    }
  }
  return (
    <Container>
      <Title>Ol??, {user?.name}!</Title>
      <HelloTitle>{hellow}</HelloTitle>

      {schedulesList.length === 0 && (
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#ccc'}}>
            N??o h?? clientes agendados no momento...
          </Text>
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {schedulesList.map((item, index) => (
          <View key={index}>
            <ListShedules
              onPress={() => handleOpenModal(item)}
              activeOpacity={0.7}
              data={item}
            />
          </View>
        ))}
      </ScrollView>

      <Button
        activeOpacity={0.5}
        title="novo agendamento"
        onPress={() => navigate('SchedulesHairCut')}
      />

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <ModalInfo
          isOpen={modalVisible}
          onClosed={closedModalDetail}
          data={items}
          finishSchedule={() => handleFinish(items?.id || '')}
        />
      </Modal>
    </Container>
  );
}
