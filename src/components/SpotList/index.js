import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Creators as CompanyActions } from '../../store/ducks/company';
import { Container, Title, List, AddIcon } from './styles';

export default function SpotList() {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.company.spots);

  useEffect(() => {
    dispatch(CompanyActions.getSpotsRequest(localStorage.getItem('companyId')));
  }, [dispatch]);

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
