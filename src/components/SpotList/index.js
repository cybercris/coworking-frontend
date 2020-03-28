import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title, List, AddIcon } from './styles';

export default function SpotList() {
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
        {/* <li></li> */}
      </List>
    </Container>
  );
}
