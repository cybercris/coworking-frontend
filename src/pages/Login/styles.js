import styled from 'styled-components';
import { colors } from '~/styles/themes';

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
  font-size: 1.7rem;
`;

export const Form = styled.form`
  border-top: 1px solid ${colors.lighter};
  border-bottom: 1px solid ${colors.lighter};
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 8px 0 14px 0;
`;

export const Text = styled.p`
  font-weight: 900;
`;
