import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators as CompanyActions } from '../../store/ducks/company';
import { Container, Box, Title, Form, Text, SInput, BButton } from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.company.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCompanySigin(e) {
    e.preventDefault();
    dispatch(CompanyActions.siginCompanyRequest(email, password));

    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <Box>
        <Title>LOGIN</Title>
        <Form>
          <SInput
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <SInput
            type="password"
            name="password"
            id="paswword"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <BButton
            type="submit"
            title="Entrar"
            loading={loading}
            onClick={e => handleCompanySigin(e)}
          />
        </Form>
        <Text to="/logup">Cadastrar</Text>
      </Box>
    </Container>
  );
}
