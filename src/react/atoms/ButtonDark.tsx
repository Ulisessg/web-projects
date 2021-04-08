/* eslint-disable react/button-has-type */
import React from 'react';
import ButtonProps from '../interfaces_and_types/atoms/ButtonInterface';
import Button from '../../styles/atoms/ButtonDarkStyles';

function ButtonDark({ text, type, handleClick }: ButtonProps): JSX.Element {
  return (
    <>
      <Button onClick={handleClick} type={type}>
        <span>{text}</span>
      </Button>
    </>
  );
}

export default ButtonDark;
