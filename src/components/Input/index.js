import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, name, placeholder, ...rest }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      // value={value}
      {...rest}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // value: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  // value: '',
};
