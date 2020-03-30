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
        <Link to="/dashboard">
          <Logo>Coworking</Logo>
        </Link>

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
              <Skeleton variant="text" animation="wave" width="500px" />
              <Skeleton variant="text" animation="wave" width="500px" />
            </>
          ) : (
            <>
              <Row>
                <Text>{company.name}</Text>
                <Text>{company.street}</Text>
              </Row>
              <Row>
                <Text>{company.email}</Text>
                <Text>{company.phone}</Text>
              </Row>
            </>
          )}
        </CompanyData>
      </CompanyInfo>
    </Container>
  );
}
