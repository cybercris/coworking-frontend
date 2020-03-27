import React, { useState } from 'react';

import { Container, Box, Title } from '../Login/styles';
import { Form, InputData, InputFile, Grid, SButton, Actions } from './styles';

export default function Logup() {
  const [fileName, setFileName] = useState('Logomarca');

  function handleFileChange(e) {
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  return (
    <Container>
      <Box>
        <Title>Logup</Title>
        <Form>
          <InputFile
            type="file"
            name="logomarca"
            id="logomarca"
            onChange={e => handleFileChange(e)}
            fileName={fileName}
          />
          <Grid>
            <InputData
              type="text"
              placeholder="Nome da empresa"
              name="companyName"
              id="companyName"
            />
            <InputData
              type="text"
              placeholder="Linkedin"
              name="linkedin"
              id="linkedin"
            />
            <InputData
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
            <InputData
              type="password"
              placeholder="Senha"
              name="password"
              id="password"
            />
            <InputData
              type="text"
              placeholder="Latitude"
              name="latitude"
              id="latitude"
            />
            <InputData
              type="text"
              placeholder="Longitude"
              name="longitude"
              id="longitude"
            />
            <InputData
              type="text"
              placeholder="Rua"
              name="street"
              id="street"
            />
            <InputData
              type="text"
              placeholder="Numero"
              name="number"
              id="number"
            />
            <InputData
              type="text"
              placeholder="Complemento"
              name="complement"
              id="complement"
            />
            <InputData
              type="text"
              placeholder="Telefone"
              name="phone"
              id="phone"
            />
          </Grid>
          <InputData
            type="text"
            placeholder="Tecnologias EX: Reactjs, Nodejs, ..."
            name="tech"
            id="tech"
            big
          />
        </Form>
        <Actions>
          <SButton type="submit" title="Cancelar" bgWhite />
          <SButton type="submit" title="Entrar" />
        </Actions>
      </Box>
    </Container>
  );
}
