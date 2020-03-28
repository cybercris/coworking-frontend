import styled from 'styled-components';
import { colors } from '~/styles/themes';

import Input from '~/components/Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  padding: 40px 105px;
  border-bottom: 0.5px solid ${colors.lighter};
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${colors.lighter};
  letter-spacing: 0.7px;
`;

export const InputFile = styled(Input)`
  width: 100%;
  height: 4.5rem;
  border: 0.5px dashed;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  background-color: ${colors.secondary};
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const InputData = styled(Input)`
  width: 100%;
  height: 3rem;
  border: 0.5px solid;
  border-radius: 4px;
  padding: 10px;
  font-size: 0.9rem;
  margin: 10px 0;

  &::placeholder {
    color: ${colors.lighter};
    font-weight: 500;
  }
`;
