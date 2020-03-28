import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { colors } from '~/styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const Title = styled.h1`
  color: ${colors.lighter};
  letter-spacing: 0.7px;
  padding-bottom: 40px;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-areas: repeat(3, 1fr);
  grid-gap: 20px;

  li:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li {
    width: 160px;
    height: 180px;
    border-radius: 4px;
    border: 0.5px solid red;
    background: ${colors.secondary};
    color: ${colors.tertiary};

    div {
      width: 80%;
      border-top: 0.5px solid ${colors.lighter};

      p {
        color: ${colors.lighter};
        font-size: 1.1rem;
        font-weight: 600;
        text-align: center;
        letter-spacing: 0.5px;
        padding-top: 5px;
      }
    }
  }
`;

export const AddIcon = styled(IoIosAddCircleOutline).attrs({
  size: '70',
  color: colors.tertiary,
})`
  flex: 0.75;
`;
