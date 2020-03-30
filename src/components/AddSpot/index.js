import React, { useState } from 'react';
import S3 from 'aws-s3';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';

import { AWS_CONFIG } from '../../config/awsConfig';
import history from '../../services/history';
import api from '../../services/api';
import { Container, Form, Box, Title, InputFile, InputData } from './styles';
import { Actions, SButton } from '~/pages/Logup/styles';

export default function AddSpot() {
  const [fileName, setFileName] = useState('Foto');
  const [file, setFile] = useState(null);
  const [spotName, setSpotName] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  function handleReset() {
    setFile(null);
    setFileName('Foto');
    setSpotName('');
    setPrice('');

    history.push('/dashboard');
  }

  async function handleAddSpot(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const S3Clint = new S3(AWS_CONFIG);
      const responseS3 = await S3Clint.uploadFile(file, fileName);

      await api.post('/spot', {
        image: responseS3.location,
        price,
        name: spotName,
        company_id: localStorage.getItem('companyId'),
      });

      setLoading(false);
      handleReset();
    } catch (error) {
      setLoading(false);
      toast.error('Erro ao cadastrar o local, verifique os dados!');
    }
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
          <NumberFormat
            customInput={InputData}
            prefix="R$"
            inputMode="numeric"
            thousandSeparator
            type="text"
            placeholder="Valor da diária"
            name="booking"
            id="booking"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </Box>
        <Actions>
          <SButton
            bgWhite
            type="reset"
            title="Cancelar"
            onClick={handleReset}
          />
          <SButton
            type="submit"
            title="Cadastrar"
            onClick={e => handleAddSpot(e)}
            loading={loading}
          />
        </Actions>
      </Form>
    </Container>
  );
}
