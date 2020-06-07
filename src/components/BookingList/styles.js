import styled from 'styled-components';
import { colors } from '~/styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 100px;
`;

export const Title = styled.h1`
  color: ${colors.lighter};
  letter-spacing: 0.7px;
  padding-bottom: 40px;
`;

export const BookingContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 15px;
  align-items: center;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.06);
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

export const DataBookingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBooking = styled.p`
  font-size: 30px;
  font-weight: bold;

  margin-bottom: 15px;
`;

export const MessageBooking = styled.p`
  font-size: 15px;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
`;

export const ButtonCancel = styled.button`
  margin-right: 10px;
  border: 0;
  font-weight: bold;
  margin-top: 10px;
  background-color: #e55e5e;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonApproved = styled.button`
  margin-right: 10px;
  border: 0;
  font-weight: bold;
  margin-top: 10px;
  background-color: #84c870;
  padding: 10px;
  border-radius: 5px;
`;
