import React from 'react';
import {
  Container,
  Title,
  StrongTitle,
  ContainerAlignCenter,
  ButtonBorder,
  ButtonBorderText,
} from './styles';
import {Button} from '../../components/Button';

export default function Home() {

  return (
    <Container>
      <Title>
        Olá, {'\n'}
        seja bem vindo{'\n'}
        ao <StrongTitle>Multi Barber</StrongTitle>
      </Title>
      <ContainerAlignCenter>
        <Button title="Acessar" />
        <ButtonBorder>
          <ButtonBorderText>Cadastrar</ButtonBorderText>
        </ButtonBorder>
      </ContainerAlignCenter>
    </Container>
  );
}
