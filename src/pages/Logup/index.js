/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';

import { Container, Box, Title } from '../Login/styles';
import { Form, InputData, InputFile, Grid, SButton, Actions } from './styles';

export default function Logup() {
  const [fileName, setFileName] = useState('Logomarca');
  const [file, setFile] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [phone, setPhone] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude: ltd, longitude: lgn } = position.coords;

        setLatitude(ltd);
        setLongitude(lgn);
      },
      err => {
        alert(
          'Seu navegador não suporta geolocalização, preencher latitude e longitude manual'
        );
      },
      { timeout: 30000 }
    );
  }, []);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
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
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
            />
            <InputData
              type="text"
              placeholder="Linkedin"
              name="linkedin"
              id="linkedin"
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
            />
            <InputData
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <InputData
              type="password"
              placeholder="Senha"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <InputData
              type="text"
              placeholder="Latitude"
              name="latitude"
              id="latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
            <InputData
              type="text"
              placeholder="Longitude"
              name="longitude"
              id="longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
            <InputData
              type="text"
              placeholder="Rua"
              name="street"
              id="street"
              value={street}
              onChange={e => setStreet(e.target.value)}
            />
            <InputData
              type="text"
              placeholder="Numero"
              name="number"
              id="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
            <InputData
              type="text"
              placeholder="Complemento"
              name="complement"
              id="complement"
              value={complement}
              onChange={e => setComplement(e.target.value)}
            />
            <InputData
              type="text"
              placeholder="Telefone"
              name="phone"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </Grid>
          <InputData
            type="text"
            placeholder="Tecnologias EX: Reactjs, Nodejs, ..."
            name="tech"
            id="tech"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            big
          />
        </Form>
        <Actions>
          <SButton type="submit" title="Cancelar" bgWhite />
          <SButton type="submit" title="Cadastrar" />
        </Actions>
      </Box>
    </Container>
  );
}
