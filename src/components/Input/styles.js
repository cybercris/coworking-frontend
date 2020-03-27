import styled from 'styled-components';
import { colors } from '~/styles/themes';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const FileName = styled.span`
  color: ${colors.lighter};
`;
