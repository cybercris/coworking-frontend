import React from 'react';

import { Container, Box, Title, Form, Text } from './styles';

export default function Login() {
  return (
    <Container>
      <Box>
        <Title>LOGIN</Title>
        <Form>
          <input type="text" />
          <input type="text" />
          <button type="button">Entrar</button>
        </Form>
        <Text>Cadastrar</Text>
      </Box>
    </Container>
  );
}
