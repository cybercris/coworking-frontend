import styled from 'styled-components';
import { colors } from '~/styles/themes';

export const Container = styled.div`
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.tertiary};

  height: 70px;
  padding: 0 100px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  color: ${colors.secondary};
  font-weight: 100;
`;

export const CompanyInfo = styled.div`
  background-color: ${colors.secondary};
  padding: 18px 100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const CompanyData = styled.div`
  padding: 10px 0;
`;

export const Avatar = styled.div`
  margin-right: 40px;
  width: 110px;
  height: 110px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 50%;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${colors.lighter};
  font-weight: 600;
  letter-spacing: 0.7px;
  padding: 5px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  p:first-child {
    margin-right: 60px;
  }
`;
