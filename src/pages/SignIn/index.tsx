import React, {useState, useEffect, useContext} from 'react';
import {
  Container,
  Logo,
  Input,
  ContainerInput,
  ContainerLogo,
  TextDescription,
  Strong,
  ButtonStrong,
  ContainerAlignDescription,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {Button} from '../../components/Button';
import logo from '../../assets/Logo.png';
import Toast from 'react-native-toast-message';

type Nav = {
  navigate: (value: string) => void;
};

export default function SignIn() {
  const {signIn, user} = useContext(AuthContext);
  const {navigate} = useNavigation<Nav>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 35}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  async function handleLogin() {
    if (email === '' || password === '') {
      return Toast.show({
        type: 'error',
        text1: 'Preenche seus dados!',
        position: 'top',
        topOffset: 70,
      });
    }
    await signIn({email, password});
  }
  return (
    <Container>
      <ContainerLogo>
        <Logo source={logo} />
      </ContainerLogo>
      <Animated.View
        style={[
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <ContainerInput>
          <Input
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#878787"
            value={email}
            onChangeText={e => setEmail(e)}
          />
        </ContainerInput>
        <ContainerInput style={{marginBottom: 30}}>
          <Input
            secureTextEntry
            placeholder="Senha"
            placeholderTextColor="#878787"
            value={password}
            onChangeText={e => setPassword(e)}
          />
        </ContainerInput>

        <Button onPress={handleLogin} title="Entrar" />

        <ContainerAlignDescription>
          <TextDescription>Ainda não possui uma conta?</TextDescription>
          <ButtonStrong onPress={() => navigate('SignUp')}>
            <Strong>Cadastre-se!</Strong>
          </ButtonStrong>
        </ContainerAlignDescription>
      </Animated.View>
      <Toast />
    </Container>
  );
}
