import React, { useEffect } from 'react';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

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
  const company = useSelector(state => state.company);

  useEffect(() => {
    dispatch(
      CompanyActions.getCompanyByIdRequest(localStorage.getItem('companyId'))
    );
  }, [dispatch]);

  console.log(company);
  return (
    <Container>
      <Top>
        <Link to="/dashboard">
          <Logo>Coworking</Logo>
        </Link>

        <Link to="/">
          <GoSignOut size={30} color="#FFF" />
        </Link>
      </Top>
      <CompanyInfo>
        <Avatar>
          {company.loadingHeader ? (
            <Skeleton
              variant="circle"
              width={110}
              height={110}
              animation="wave"
            />
          ) : (
            <Img src={company.data?.logo} alt="logo" />
          )}
        </Avatar>
        <CompanyData>
          {company.loadingHeader ? (
            <>
              <Skeleton variant="text" animation="wave" width="500px" />
              <Skeleton variant="text" animation="wave" width="500px" />
            </>
          ) : (
            <>
              <Row>
                <Text>{company.data?.name}</Text>
                <Text>{company.data?.street}</Text>
              </Row>
              <Row>
                <Text>{company.data?.email}</Text>
                <Text>{company.data?.phone}</Text>
              </Row>
            </>
          )}
        </CompanyData>
      </CompanyInfo>
    </Container>
  );
}
