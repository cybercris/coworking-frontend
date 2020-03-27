import React from 'react';

import { Container, Box, Title, BButton } from '../Login/styles';
import { Form, SInput, BInput, Logomarca, Grid } from './styles';

export default function Logup() {
  return (
    <Container>
      <Box>
        <Title>Logup</Title>
        <Form>
          <Logomarca type="file" placeholder="Logomarca" />
          <Grid>
            <SInput type="text" placeholder="Nome da empresa" />
            <SInput type="text" placeholder="Linkedin" />
            <SInput type="text" placeholder="Email" />
            <SInput type="text" placeholder="Senha" />
            <SInput type="text" placeholder="Latitude" />
            <SInput type="text" placeholder="Longitude" />
            <SInput type="text" placeholder="Rua" />
            <SInput type="text" placeholder="Numero" />
            <SInput type="text" placeholder="Complemento" />
            <SInput type="text" placeholder="Telefone" />
          </Grid>
          <BInput
            type="text"
            placeholder="Tecnologias EX: Reactjs, Nodejs, ..."
          />
        </Form>
        <BButton type="submit" title="Entrar" />
      </Box>
    </Container>
  );
}
