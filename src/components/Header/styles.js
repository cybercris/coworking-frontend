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
  padding: 0 100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const CompanyData = styled.div`
  padding: 10px 0;
`;

export const Avatar = styled.div`
  margin-right: 40px;
  width: 130px;
  height: 130px;
  border-radius: 65px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${colors.lighter};
  font-weight: 600;
  letter-spacing: 0.7px;
  padding: 5px 0;
`;
