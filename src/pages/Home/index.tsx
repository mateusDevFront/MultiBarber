import React from 'react';
import {
  Container,
  Title,
  StrongTitle,
  ContainerAlignCenter,
  ButtonBorder,
  ButtonBorderText,
  ImageBackground,
} from './styles';
import background from '../../assets/home.png';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Nav} from '../../routes/mainTab'
export default function Home() {
  const {navigate} = useNavigation<Nav>();

  return (
    <ImageBackground source={background}>
      <Container>
        <Title>
          Olá, {'\n'}
          seja bem vindo{'\n'}
          ao <StrongTitle>Multi Barber</StrongTitle>
        </Title>
        <ContainerAlignCenter>
          <Button onPress={() => navigate('SignIn')} title="Acessar" />
          <ButtonBorder onPress={() => navigate('SignUp')}>
            <ButtonBorderText>Cadastrar</ButtonBorderText>
          </ButtonBorder>
        </ContainerAlignCenter>
      </Container>
    </ImageBackground>
  );
}
