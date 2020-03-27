import React, { useState } from 'react';

import { Container, Box, Title, BButton } from '../Login/styles';
import { Form, SInput, BInput, Logomarca, Grid } from './styles';

export default function Logup() {
  const [fileName, setFileName] = useState('');

  function handleFileChange(e) {
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log('filename: ', fileName);
  }

  return (
    <Container>
      <Box>
        <Title>Logup</Title>
        <Form>
          <Logomarca
            type="file"
            name="logomarca"
            id="logomarca"
            onChange={e => handleFileChange(e)}
            fileName={fileName}
          />
          <Grid>
            <SInput
              type="text"
              placeholder="Nome da empresa"
              name="companyName"
              id="companyName"
            />
            <SInput
              type="text"
              placeholder="Linkedin"
              name="linkedin"
              id="linkedin"
            />
            <SInput type="email" placeholder="Email" name="email" id="email" />
            <SInput
              type="password"
              placeholder="Senha"
              name="password"
              id="password"
            />
            <SInput
              type="text"
              placeholder="Latitude"
              name="latitude"
              id="latitude"
            />
            <SInput
              type="text"
              placeholder="Longitude"
              name="longitude"
              id="longitude"
            />
            <SInput type="text" placeholder="Rua" name="street" id="street" />
            <SInput
              type="text"
              placeholder="Numero"
              name="number"
              id="number"
            />
            <SInput
              type="text"
              placeholder="Complemento"
              name="complement"
              id="complement"
            />
            <SInput
              type="text"
              placeholder="Telefone"
              name="phone"
              id="phone"
            />
          </Grid>
          <BInput
            type="text"
            placeholder="Tecnologias EX: Reactjs, Nodejs, ..."
            name="tech"
            id="tech"
          />
        </Form>
        <BButton type="submit" title="Entrar" />
      </Box>
    </Container>
  );
}
