import styled from 'styled-components';
import { colors } from '~/styles/themes';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin: 20px 0 16px 0;
`;

export const Form = styled.form`
  border-top: 0.5px solid ${colors.lighter};
  border-bottom: 0.5px solid ${colors.lighter};
  display: flex;
  flex-direction: column;
  margin: 8px 0 14px 0;
  padding: 24px 28px;
`;

export const InputData = styled(Input)`
  width: ${props => (!props.big ? ' 14rem' : '100%')};
  height: 2.4rem;
  border: 0.5px solid;
  border-radius: 4px;
  padding: 10px;
  font-size: 0.8rem;

  &::placeholder {
    color: ${colors.lighter};
    font-weight: 500;
  }
`;

export const InputFile = styled(Input)`
  width: 100%;
  height: 5rem;
  border: 0.5px dashed;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const SButton = styled(Button)`
  width: 10rem;
  height: 2.8rem;
  color: ${props => (!props.bgWhite ? colors.secondary : colors.lighter)};
  background-color: ${props =>
    !props.bgWhite ? colors.tertiary : colors.secondary};
  border: ${props => (!props.bgWhite ? 0 : `1px solid ${colors.tertiary}`)};
  border-radius: 4px;
  margin-right: ${props => (props.bgWhite ? '10px' : '0')};
  margin-left: ${props => (!props.bgWhite ? '10px' : '0')};
`;
