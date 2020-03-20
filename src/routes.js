import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '~/pages/Login';
import Logup from '~/pages/Logup';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/logup" component={Logup} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
