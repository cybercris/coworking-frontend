import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Box, Title, InputFile, InputData } from './styles';
import { Actions, SButton } from '~/pages/Logup/styles';

export default function AddSpot() {
  const [fileName, setFileName] = useState('Foto');
  const [file, setFile] = useState(null);
  const [spotName, setSpotName] = useState('');
  const [booking, setBooking] = useState('');

  function handleFileChange(e) {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  return (
    <Container>
      <Form>
        <Box>
          <Title>Adicionar Local</Title>
          {/* <Link to="/dashboard">Spot list</Link> */}
          <InputFile
            type="file"
            name="spotPhoto"
            id="spotPhoto"
            onChange={e => handleFileChange(e)}
            fileName={fileName}
          />
          <InputData
            type="text"
            placeholder="Nome do local"
            name="spotName"
            id="spotName"
            value={spotName}
            onChange={e => setSpotName(e.target.value)}
          />
          <InputData
            type="text"
            placeholder="Valor da diária"
            name="booking"
            id="booking"
            value={booking}
            onChange={e => setBooking(e.target.value)}
          />
        </Box>
        <Actions>
          <SButton type="reset" title="Cancelar" bgWhite />
          <SButton type="submit" title="Cadastrar" />
        </Actions>
      </Form>
    </Container>
  );
}
