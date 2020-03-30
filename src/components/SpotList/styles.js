import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';

import { makeStyles } from '@material-ui/core';
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;

  li {
    width: 215px;
    height: 210px;
    border-radius: 4px;
    border: 0.5px solid ${colors.tertiary};
    background: ${colors.secondary};
    color: ${colors.tertiary};
  }

  li:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

  .spot {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid ${colors.lighter};

    img {
      width: 214px;
      height: 130px;
    }

    div {
      width: 80%;
      border-top: 0.5px solid ${colors.lighter};
      margin-top: 20px;

      p {
        color: ${colors.lighter};
        font-size: 1rem;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.5px;
        padding-top: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        strong {
          color: #000;
          font-weight: 600;
        }
      }
    }
  }
`;

export const AddIcon = styled(IoIosAddCircleOutline).attrs({
  size: '80',
  color: colors.tertiary,
})`
  flex: 0.75;
`;

export const useStyles = makeStyles({
  customTooltip: {
    fontSize: '1rem',
  },
});
