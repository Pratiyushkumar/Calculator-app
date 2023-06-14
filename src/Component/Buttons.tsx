import { FC } from 'react';
import React = require('react');
import { ButtonProps } from '../types/PropTypes';

export const Buttons: FC<ButtonProps> = ({
  buttonTitle,
  handleButtonClicked,
  btnId,
}) => {
  return (
    <button
      id={btnId}
      onClick={(e) => handleButtonClicked(e)}
      value={buttonTitle}
    >
      {buttonTitle}
    </button>
  );
};
