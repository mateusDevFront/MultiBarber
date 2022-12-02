import React from 'react';

import {
  Container,
  Title,
  ContainerBox,
  BoxGratuito,
  BoxGold,
  Description,
  ButtonGold,
  ContainerButtonGold
} from './styles';

export default function Planos() {
  return (
    <Container>
      <ContainerBox>
        <BoxGratuito>
          <Title style={{fontWeight: 'bold', fontSize: 17}}>Plano Gratuito</Title>
          <Description>
            - Registar cortes {'\n'}- Registrar apenas 3 modelos{'\n'}-
            Agendamento limitado
          </Description>
        </BoxGratuito>
        <BoxGold>
          <Title style={{fontWeight: 'bold', color: '#FBB031',  fontSize: 17}}>
            Plano Gold
          </Title>
          <Description>
            - Cortes e Modelos ilimitados{'\n'}- Agendamento ilimitado{'\n'}-
            Editar perfil do usuário{'\n'}- Editar o tipo de conta{'\n'}-
            Receber atualizações futuras
          </Description>

          <ContainerButtonGold>
            <ButtonGold activeOpacity={0.7}>
              <Title
                style={{color: '#11121d', fontWeight: 'bold', fontSize: 17}}>
                Aderir Plano Gold
              </Title>
            </ButtonGold>
          </ContainerButtonGold>
        </BoxGold>
      </ContainerBox>
    </Container>
  );
}
