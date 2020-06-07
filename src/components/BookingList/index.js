import React, { useEffect, useState, useMemo } from 'react';
import socketIo from 'socket.io-client';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';
import { BASEURL } from '~/config/enviroments';

import {
  Container,
  Title,
  BookingContainer,
  ButtonApproved,
  ButtonCancel,
  ButtonContainer,
  DataBookingContainer,
  MessageBooking,
  TitleBooking,
} from './styles';

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const companyId = localStorage.getItem('companyId');
  const socket = useMemo(
    () =>
      socketIo(BASEURL, {
        query: { company_id: companyId },
      }),
    [companyId]
  );

  useEffect(() => {
    socket.on('booking_request', data => {
      setBookings([...bookings, data]);
    });
  }, [bookings, socket]);

  async function handleAccept(id) {
    await api.post(`/bookings/${id}/approvals`);

    setBookings(bookings.filter(booking => booking._id !== id));
  }

  async function handleReject(id) {
    await api.post(`/bookings/${id}/rejections`);

    setBookings(bookings.filter(booking => booking._id !== id));
  }
  return (
    <Container>
      <Title>Pedidos de reservas</Title>

      <ul>
        {bookings.map(booking => (
          <BookingContainer>
            <img src={booking.spot.image} alt="logo" />

            <DataBookingContainer>
              <div>
                <TitleBooking>{booking.spot.name}</TitleBooking>
                <MessageBooking>
                  {`${booking.user.name} deseja reservar ${
                    booking.spot.name
                  } no ${format(new Date(booking.date), "'dia' dd 'de' MMMM'", {
                    locale: pt,
                  })} de ${new Date(booking.date).getFullYear()} as ${new Date(
                    booking.date
                  ).getHours()}:${new Date(booking.date).getMinutes()}`}
                </MessageBooking>
                <MessageBooking>
                  <strong>Nome: </strong>
                  {booking.user.name}
                </MessageBooking>
                <MessageBooking>
                  <strong>Email: </strong>
                  {booking.user.email}
                </MessageBooking>
                <MessageBooking>
                  <strong>Telefone: </strong>
                  {booking.user.phone}
                </MessageBooking>
              </div>
              <ButtonContainer>
                <ButtonCancel
                  type="button"
                  onClick={() => handleReject(booking._id)}
                >
                  Rejeitar
                </ButtonCancel>
                <ButtonApproved
                  type="button"
                  onClick={() => handleAccept(booking._id)}
                >
                  Aceitar
                </ButtonApproved>
              </ButtonContainer>
            </DataBookingContainer>
          </BookingContainer>
        ))}
      </ul>
    </Container>
  );
}

export default BookingList;
