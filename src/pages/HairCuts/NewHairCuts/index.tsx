import React, {useState, useContext, useEffect} from 'react';
import {Button} from '../../../components/Button';
import {Container, BoxContainer, ContainerInput, Input} from './styles';
import {api} from '../../../services/api';
import Toast from 'react-native-toast-message';

interface NewHairCutProps {
  subscriptions: boolean;
}



export default function NewHairCuts({}: NewHairCutProps) {
  const [items, setItems] = useState();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [checkSubscription, setCheckSubscription] = useState<NewHairCutProps>();

  useEffect(() => {
    async function validate() {
      const check = await api.get('/haircut/check', {
        params: {
          subscriptions: checkSubscription,
        },
      });
      setCheckSubscription(check.data);
      return {
        checkSubscription: checkSubscription?.subscriptions ? true : false,
      };
    }
    validate();
  }, []);

  async function handleRegister() {
    if (name === '' || price === '') {
      Toast.show({
        type: 'error',
        text1: 'Preenche o formulário',
        position: 'bottom',
        topOffset: 70,
      });
    } else if (checkSubscription?.subscriptions === null) {
      Toast.show({
        type: 'error',
        text1: 'Você atingiu o limite gratuito :(',
        position: 'bottom',
        topOffset: 70,
      });
    } else {
      try {
        const response = await api.post('/haircut', {
          name: name,
          price: Number(price),
        });
        setItems(response.data);
        setName('');
        setPrice('');
        Toast.show({
          type: 'success',
          text1: 'Modelo cadastrado com sucesso :)',
          position: 'bottom',
          topOffset: 70,
        });
      } catch (err) {
        console.log('erro', err);
      }
    }
  }

  return (
    <Container>
      <BoxContainer>
        <ContainerInput>
          <Input
            value={name}
            onChangeText={e => setName(e)}
            placeholder="Nome do corte"
            placeholderTextColor="#878787"
          />
        </ContainerInput>
        <ContainerInput style={{marginBottom: 20}}>
          <Input
            value={price}
            keyboardType="numeric"
            onChangeText={e => setPrice(e)}
            placeholder="Valor do corte"
            placeholderTextColor="#878787"
          />
        </ContainerInput>

        <Button onPress={() => handleRegister()} title="Cadastrar" />
      </BoxContainer>
      <Toast />
    </Container>
  );
}
