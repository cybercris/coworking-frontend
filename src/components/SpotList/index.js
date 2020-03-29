import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

import spotData from './spot_data';
import { Container, Title, List, AddIcon, useStyles } from './styles';

export default function SpotList() {
  const classes = useStyles();
  return (
    <Container>
      <Title>Locais</Title>
      <List>
        <Link to="/dashboard/addspot">
          <li>
            <AddIcon />
            <div>
              <p>Adicionar</p>
            </div>
          </li>
        </Link>
        {spotData.map((item, index) => (
          <li className="spot">
            <img
              src="https://pscoworking.s3-sa-east-1.amazonaws.com/office.jpg.jpeg"
              alt=""
            />
            <div>
              <Tooltip
                classes={{ tooltip: classes.customTooltip }}
                title="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              >
                <p>
                  Nome: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </Tooltip>
              <p>Valor: R$ 50,00</p>
            </div>
          </li>
        ))}
      </List>
    </Container>
  );
}
