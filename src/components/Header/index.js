import React from 'react';

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
        <IconDoorOut />
      </Top>
      <CompanyInfo>
        <Avatar />
        <CompanyData>
          <Text>Concrete Solutions</Text>
          <Text>Rua benfica, N 90</Text>
          <Text>concrete@gmail.com</Text>
          <Text>(81)</Text>
        </CompanyData>
      </CompanyInfo>
    </Container>
  );
}
