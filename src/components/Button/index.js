/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ type, title, ...rest }) {
  return (
    <button type={type} {...rest}>
      {title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Button.defaultProps = {
  title: '',
};
