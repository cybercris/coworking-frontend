import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from './styles';

export default function Loading({ size, color }) {
  return <Spinner size={size} color={color} />;
}

Loading.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
