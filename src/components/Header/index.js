import React from 'react';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  const company = useSelector(state => state.company.data);

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
          <Img src={company?.logo} alt="logo" />
        </Avatar>
        <CompanyData>
          <Row>
            <Text>{company?.name}</Text>
            <Text>{company?.street}</Text>
          </Row>
          <Row>
            <Text>{company?.email}</Text>
            <Text>{company?.phone}</Text>
          </Row>
        </CompanyData>
      </CompanyInfo>
    </Container>
  );
}
