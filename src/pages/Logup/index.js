/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import S3 from 'aws-s3';
import { toast } from 'react-toastify';

import { Container, Box, Title } from '../Login/styles';
import { Form, InputData, InputFile, Grid, SButton, Actions } from './styles';
import history from '../../services/history';
import api from '../../services/api';
import { AWS_CONFIG } from '../../config/awsConfig';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude: ltd, longitude: lgn } = position.coords;

        setLatitude(ltd);
        setLongitude(lgn);
      },
      () => {
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

  function handleReset() {
    setFile(null);
    setCompanyName('');
    setLinkedin('');
    setEmail('');
    setPassword('');
    setLatitude('');
    setLongitude('');
    setStreet('');
    setNumber('');
    setComplement('');
    setPhone('');
    setTechs('');

    history.push('/');
  }

  async function handleAddCompany(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const S3Clint = new S3(AWS_CONFIG);
      const responseS3 = await S3Clint.uploadFile(file, fileName);

      await api.post('/company', {
        email,
        password,
        name: companyName,
        linkedin,
        logo: responseS3.location,
        techs,
        latitude,
        longitude,
        street,
        number,
        complement,
        phone,
      });

      setLoading(false);
      handleReset();
    } catch (error) {
      setLoading(false);
      toast.error('Erro ao cadastrar sua empresa, verifique os dados!');
    }
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
            required
          />
          <Grid>
            <InputData
              type="text"
              placeholder="Nome da empresa"
              name="companyName"
              id="companyName"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              required
            />
            <InputData
              type="text"
              placeholder="Linkedin"
              name="linkedin"
              id="linkedin"
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              required
            />
            <InputData
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
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
              required
            />
            <InputData
              type="text"
              placeholder="Longitude"
              name="longitude"
              id="longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required
            />
            <InputData
              type="text"
              placeholder="Rua"
              name="street"
              id="street"
              value={street}
              onChange={e => setStreet(e.target.value)}
              required
            />
            <InputData
              type="text"
              placeholder="Numero"
              name="number"
              id="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              required
            />
            <InputData
              type="text"
              placeholder="Complemento"
              name="complement"
              id="complement"
              value={complement}
              onChange={e => setComplement(e.target.value)}
              required
            />
            <InputData
              type="text"
              placeholder="Telefone"
              name="phone"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </Grid>
          <InputData
            type="text"
            placeholder="Tecnologias EX: Reactjs, Nodejs, ..."
            name="tech"
            id="tech"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required
            big
          />
        </Form>
        <Actions>
          <SButton
            type="reset"
            title="Cancelar"
            bgWhite
            onClick={handleReset}
          />
          <SButton
            type="submit"
            title="Cadastrar"
            onClick={e => handleAddCompany(e)}
            loading={loading}
          />
        </Actions>
      </Box>
    </Container>
  );
}
