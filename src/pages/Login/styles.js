import styled from 'styled-components';
import { colors } from '~/styles/themes';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.secondary};
  padding: 30px 20px 20px;
  border-radius: 4px;
  border: 1px solid ${colors.tertiary};
`;

export const Title = styled.h1`
  letter-spacing: 0.5px;
  font-size: 1.6rem;
`;

export const Form = styled.form`
  border-top: 0.5px solid ${colors.lighter};
  border-bottom: 0.5px solid ${colors.lighter};
  display: flex;
  flex-direction: column;
  padding: 24px 28px 30px;
  margin: 8px 0 14px 0;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  font-weight: 900;
`;

export const SInput = styled(Input)`
  width: 14rem;
  height: 2.8rem;
  border: 0.5px solid;
  border-radius: 4px;
  margin-bottom: 22px;
  padding: 10px;
  font-size: 0.8rem;

  &::placeholder {
    color: ${colors.lighter};
    font-weight: 600;
  }
`;

export const BButton = styled(Button)`
  height: 2.8rem;
  background-color: ${colors.tertiary};
  border: 0.5px;
  border-radius: 4px;
`;
