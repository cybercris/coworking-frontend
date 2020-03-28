import React from 'react';
import { GoSignOut } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';

import {
  Container,
  Top,
  Logo,
  CompanyInfo,
  CompanyData,
  Avatar,
  Text,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo>Coworking</Logo>
        <GoSignOut size={30} color="#FFF" />
      </Top>
      <CompanyInfo>
        <Avatar>
          <FaUserCircle size={130} />
        </Avatar>
        <CompanyData>
          <Text>Concrete Solutions</Text>
          <Text>Rua benfica, N 90</Text>
          <Text>concrete@gmail.com</Text>
          <Text>(81) 3236-4534</Text>
        </CompanyData>
      </CompanyInfo>
    </Container>
  );
}
