import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute';

import Header from '~/components/Header';
import SpotList from '~/components/SpotList';
import AddSpot from '~/components/AddSpot';
import BookingList from '~/components/BookingList';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Switch>
        <PrivateRoute path="/dashboard" isPrivate exact component={SpotList} />
        <PrivateRoute path="/dashboard/addspot" isPrivate component={AddSpot} />
        <PrivateRoute
          path="/dashboard/booking-list"
          isPrivate
          component={BookingList}
        />
      </Switch>
    </>
  );
}
