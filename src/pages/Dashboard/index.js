import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '~/components/Header';
import SpotList from '~/components/SpotList';
import AddSpot from '~/components/AddSpot';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/dashboard" exact component={SpotList} />
        <Route path="/dashboard/addspot" component={AddSpot} />
      </Switch>
    </>
  );
}
