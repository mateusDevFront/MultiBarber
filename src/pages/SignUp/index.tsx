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
import {AuthContext} from '../../context/AuthContext';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Button';
import logo from '../../assets/Logo.png';
import Toast from 'react-native-toast-message';
import {Nav} from '../../routes/mainTab'
export default function SignUp() {
  const {navigate} = useNavigation<Nav>();

  const {signUp} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  async function handleRegister() {
    if (name === '' || email === '' || password === '') {
      return Toast.show({
        type: 'error',
        text1: 'Preenche seus dados!',
        position: 'top',
        topOffset: 70,
      });
    } else if (password != confirmPassword) {
      return Toast.show({
        type: 'error',
        text1: 'Verifica se a senha está correspondente',
        position: 'top',
        topOffset: 70,
      });
    } else {
      await signUp({name, email, password});
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
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
            keyboardType="name-phone-pad"
            placeholder="Barbearia"
            placeholderTextColor="#878787"
            value={name}
            onChangeText={e => setName(e)}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#878787"
            value={email}
            onChangeText={e => setEmail(e)}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            secureTextEntry
            keyboardType="numeric"
            placeholder="Senha"
            placeholderTextColor="#878787"
            value={password}
            onChangeText={e => setPassword(e)}
          />
        </ContainerInput>
        <ContainerInput style={{marginBottom: 30}}>
          <Input
            secureTextEntry
            keyboardType="numeric"
            placeholder="Confirme sua senha"
            placeholderTextColor="#878787"
            value={confirmPassword}
            onChangeText={e => setConfirmPassword(e)}
          />
        </ContainerInput>

        <Button onPress={handleRegister} title="Registrar" />

        <ContainerAlignDescription>
          <TextDescription>Já possui uma conta?</TextDescription>
          <ButtonStrong onPress={() => navigate('SignIn')}>
            <Strong>Entre aqui!</Strong>
          </ButtonStrong>
        </ContainerAlignDescription>
      </Animated.View>
      <Toast />
    </Container>
  );
}
