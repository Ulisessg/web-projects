import React from 'react';
import LinkLightThinStyles from '../../styles/atoms/LinkLightThinStyles';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';

function LinkLightNoBlankThin({ text, path, label }: LinkProps) {
  return (
    <>
      <LinkLightThinStyles aria-label={label} href={path}>
        {text}
      </LinkLightThinStyles>
    </>
  );
}

export default LinkLightNoBlankThin;
