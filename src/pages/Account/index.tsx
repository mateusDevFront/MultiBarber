import React, {useContext} from 'react';
import {Button} from 'react-native';
import {Container, Title} from './styles';

import {AuthContext} from '../../context/AuthContext';

export default function Account() {
  const {signOut} = useContext(AuthContext);
  return (
    <Container>
      <Title>Hair cuts</Title>
      <Button title="Deslogar" onPress={signOut} />
    </Container>
  );
}
