import React, { useEffect } from 'react';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

import history from '../../services/history';
import { Creators as CompanyActions } from '../../store/ducks/company';

import {
  Container,
  Top,
  Logo,
  CompanyInfo,
  CompanyData,
  Avatar,
  Text,
  Img,
  Row,
  Column,
  ContainerBooking,
  Booking,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const company = useSelector(state => state.company.data);
  const loadingHeader = useSelector(state => state.company.loadingHeader);

  useEffect(() => {
    dispatch(
      CompanyActions.getCompanyByIdRequest(localStorage.getItem('companyId'))
    );
  }, [dispatch]);

  function handleSignUot(e) {
    e.preventDefault();
    localStorage.removeItem('companyId');

    history.push('/');
  }

  return (
    <Container>
      <Top>
        <ContainerBooking>
          <Link to="/dashboard">
            <Logo>Coworking</Logo>
          </Link>

          <Link to="/dashboard/booking-list">
            <Booking>Reservas</Booking>
          </Link>
        </ContainerBooking>
        <GoSignOut size={30} color="#FFF" onClick={e => handleSignUot(e)} />
      </Top>
      <CompanyInfo>
        <Avatar>
          {loadingHeader && !company.logo ? (
            <Skeleton
              variant="circle"
              width={110}
              height={110}
              animation="wave"
            />
          ) : (
            <Img src={company.logo} alt="logo" />
          )}
        </Avatar>
        <CompanyData>
          {loadingHeader && !company.name ? (
            <>
              <Skeleton variant="text" animation="wave" width="600px" />
              <Skeleton variant="text" animation="wave" width="600px" />
            </>
          ) : (
            <Row>
              <Column>
                <Text>{company.name}</Text>
                <Text>{company.email}</Text>
              </Column>
              <Column>
                <Text>{company.street}</Text>
                <Text>{company.phone}</Text>
              </Column>
            </Row>
          )}
        </CompanyData>
      </CompanyInfo>
    </Container>
  );
}
