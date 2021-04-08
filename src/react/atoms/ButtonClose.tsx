import React from 'react';
import ButtonCloseProps from '../interfaces_and_types/atoms/ButtonCloseInterface';
import ButtonCloseStyles from '../../styles/atoms/ButtonCloseStyles';

function ButtonClose({ handleClick }: ButtonCloseProps) {
  return (
    <>
      <ButtonCloseStyles tabIndex={0} onClick={handleClick} type="button">
        X
      </ButtonCloseStyles>
    </>
  );
}

export default ButtonClose;
