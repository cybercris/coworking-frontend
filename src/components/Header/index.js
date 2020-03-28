import React from 'react';
import { GoSignOut } from 'react-icons/go';

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
  return (
    <Container>
      <Top>
        <Logo>Coworking</Logo>
        <GoSignOut size={30} color="#FFF" />
      </Top>
      <CompanyInfo>
        <Avatar>
          <Img
            src="https://pscoworking.s3-sa-east-1.amazonaws.com/concrete.png.png"
            alt=""
          />
        </Avatar>
        <CompanyData>
          {/* lembrar de transformar isso pra column  */}
          <Row>
            <Text>Concrete Solutions</Text>
            <Text>Rua benfica, N 90</Text>
          </Row>
          <Row>
            <Text>concrete@gmail.com</Text>
            <Text>(81) 3236-4534</Text>
          </Row>
        </CompanyData>
      </CompanyInfo>
    </Container>
  );
}
