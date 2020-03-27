import React from 'react';

import { Container, Box, Title, Form, Text, SInput, BButton } from './styles';

export default function Login() {
  return (
    <Container>
      <Box>
        <Title>LOGIN</Title>
        <Form>
          <SInput type="email" name="email" id="email" placeholder="Email" />
          <SInput
            type="password"
            name="password"
            id="paswword"
            placeholder="Senha"
          />
          <BButton type="submit" title="Entrar" />
        </Form>
        <Text>Cadastrar</Text>
      </Box>
    </Container>
  );
}
