import React, {useState, useContext, useEffect} from 'react';
import {Button} from '../../../components/Button';
import {Container, BoxContainer, ContainerInput, Input} from './styles';
import {api} from '../../../services/api';
import Toast from 'react-native-toast-message';

interface NewHairCutProps {
  subscriptions: boolean;
  count: number;
}

export default function NewHairCuts({subscriptions, count}: NewHairCutProps) {
  const [items, setItems] = useState();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  async function handleRegister() {
    /* console.log({
      name, price
    }) */
    if (name === '' || price === '') {
      Toast.show({
        type: 'error',
        text1: 'Preencha o formulário!',
        position: 'bottom',
        topOffset: 70,
      });
    }
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
      console.log('algum problema ', err);
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
            onChangeText={e => setPrice(e)}
            placeholder="Valor do corte"
            placeholderTextColor="#878787"
          />
        </ContainerInput>
        <Button onPress={handleRegister} title="Cadastrar" />
      </BoxContainer>
      <Toast />
    </Container>
  );
}
