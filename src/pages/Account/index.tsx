import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Button';
import {
  Container,
  BoxContainer,
  ContainerInput,
  Input,
  Text,
  BoxSignature,
  TextSignature,
  ContainerSignature,
  ButtonChange,
  TextChange,
  ButtonChangeDisabled
} from './styles';
import {AuthContext} from '../../context/AuthContext';
import {api} from '../../services/api';
import Toast from 'react-native-toast-message';

interface UserProps {
  id: string;
  name: string;
  email: string;
  subscriptions: boolean;
}

interface AccountProps {
  user: UserProps;
  premium: boolean;
}

type Nav = {
  navigate: (value: string) => void;
};
export default function Account({}: AccountProps) {
  const {navigate} = useNavigation<Nav>();
  const {signOut} = useContext(AuthContext);

  const [items, setItems] = useState<UserProps>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  console.log('[items] ->', items);

  useEffect(() => {
    async function getDetailUser() {
      try {
        const response = await api.get('/me');
        setItems(response.data);

        const user = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        };
        return {
          user: user,
          premium:
            response.data?.subscriptions?.status === 'active' ? true : false,
        };
      } catch (err) {
        console.log('erro na busca', err);
      }
    }
    getDetailUser();
  }, []);

  async function handleUpdated() {
    if (name === '' || email === '') {
      return Toast.show({
        type: 'error',
        text1: 'Preenche os novos dados!',
        position: 'bottom',
        topOffset: 70,
      });
    }
    try {
      const response = await api.put('/profile', {
        name: name,
        email: email,
      });
      setName(response.data);
      setEmail(response.data);
      Toast.show({
        type: 'success',
        text1: 'Dados alterados, relogue para atualizar :)',
        position: 'bottom',
        topOffset: 70,
      });
      setName('');
      setEmail('');
    } catch (err) {
      console.log('erro', err);
    }
  }
  useEffect(() => {}, [name, email]);

  function handleOpenToasAviso(){
    Toast.show({
      type: 'error',
      text1: 'Você não possui o Plano Gold :(',
      position: 'bottom',
      topOffset: 70,
    });
  }

  return (
    <Container>
      <BoxContainer>
        <ContainerInput>
          <Input
            disableFullscreenUI={true}
            value={name}
            onChangeText={e => setName(e)}
            placeholder="Novo nome"
            placeholderTextColor="#878787"
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            value={email}
            onChangeText={e => setEmail(e)}
            placeholder="Novo email"
            placeholderTextColor="#878787"
          />
        </ContainerInput>
        <ContainerSignature>
          <Text>Assinatura</Text>
          <BoxSignature onPress={() => navigate('Planos')} activeOpacity={0.7}>
            {items?.subscriptions === null ? (
              <TextSignature>Gratuíto</TextSignature>
            ) : (
              <TextSignature style={{color: '#FBB031'}}>Gold</TextSignature>
            )}
          </BoxSignature>
        </ContainerSignature>
        {items?.subscriptions === null ? (
          <ButtonChangeDisabled activeOpacity={0.7} onPress={handleOpenToasAviso}>
            <TextChange style={{color: '#9d1919'}}>Alterar</TextChange>
          </ButtonChangeDisabled>
        ) : (
          <ButtonChange onPress={handleUpdated}>
            <TextChange>Alterar</TextChange>
          </ButtonChange>
        )}
        <Button onPress={signOut} title="Sair" />
      </BoxContainer>
      {/* {items?.subscriptions === null ? (
        <Text style={{color: '#ccc', textAlign: 'center', marginRight: 15}}>
          Você não possui o Plano Gold :({' '}
        </Text>
      ) : (
        ''
      )} */}
      <Toast />
    </Container>
  );
}
