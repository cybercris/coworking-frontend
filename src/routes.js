import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '~/pages/Login';
import Logup from '~/pages/Logup';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Login} />
      <PrivateRoute path="/logup" component={Logup} />
      <PrivateRoute path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
}
