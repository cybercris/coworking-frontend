/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

export default function Button({ type, title, loading, ...rest }) {
  return (
    <button type={type} {...rest}>
      {loading ? <Loading size={30} color="#fff" /> : title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  title: '',
  loading: false,
};
