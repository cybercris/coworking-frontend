import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './Auth';

export default function PrivateRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  if (!isAuthenticated() && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated() && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route component={Component} {...rest} />;
}

PrivateRoute.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

PrivateRoute.defaultProps = {
  isPrivate: false,
};
