import React from 'react';
import PropTypes from 'prop-types';

import { Label, FileName, InputFile } from './styles';

export default function Input({
  type,
  id,
  name,
  placeholder,
  fileName,
  ...rest
}) {
  return (
    <>
      {type !== 'file' ? (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required
          // value={value}
          {...rest}
        />
      ) : (
        <Label htmlFor={id} {...rest}>
          <InputFile type={type} name={name} id={id} required />
          <FileName>{fileName}</FileName>
        </Label>
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // value: PropTypes.string,
  placeholder: PropTypes.string,
  fileName: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  // value: '',
  fileName: '',
};
