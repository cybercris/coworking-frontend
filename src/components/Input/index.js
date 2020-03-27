import React from 'react';
import PropTypes from 'prop-types';

import { FileName, InputFile } from './styles';

export default function Input({ type, name, placeholder, fileName, ...rest }) {
  return (
    <>
      {type !== 'file' ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          // value={value}
          {...rest}
        />
      ) : (
        <label {...rest}>
          <InputFile type={type} name={name} />
          <FileName>{fileName}</FileName>
        </label>
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // value: PropTypes.string,
  placeholder: PropTypes.string,
  fileName: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  // value: '',
  fileName: '',
};
