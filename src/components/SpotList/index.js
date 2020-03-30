import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

import { Creators as CompanyActions } from '../../store/ducks/company';
import { Container, Title, List, AddIcon, useStyles } from './styles';

export default function SpotList() {
  const classes = useStyles();
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
        {spots.map(spot => (
          <li className="spot">
            <img src={spot.image} alt="local" />
            <div>
              <Tooltip
                classes={{ tooltip: classes.customTooltip }}
                title={spot.name}
                arrow
              >
                <p>
                  <strong>Nome: </strong> {spot.name}
                </p>
              </Tooltip>
              <Tooltip
                classes={{ tooltip: classes.customTooltip }}
                title={spot.price}
                arrow
              >
                <p>
                  <strong>Valor: </strong> {spot.price}
                </p>
              </Tooltip>
            </div>
          </li>
        ))}
      </List>
    </Container>
  );
}
