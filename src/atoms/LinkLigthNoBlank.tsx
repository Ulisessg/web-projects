import React from 'react';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';
import LinkLigthStyles from '../../styles/atoms/LinkLigthStyles';

function LinkLightNoBlank({ label, text, path }: LinkProps): JSX.Element {
  return (
    <>
      <LinkLigthStyles aria-label={label} href={path}>
        {text}
      </LinkLigthStyles>
    </>
  );
}

export default LinkLightNoBlank;
