import { FC } from 'react';
import React = require('react');
import { InputProps } from '../types/PropTypes';

export const InputComponent: FC<InputProps> = ({
  id,
  value,
  handleOutputChange,
}) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={(e) => handleOutputChange(e)}
      disabled={true}
    />
  );
};
