import React from 'react';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';
import LinkLightThinStyles from '../../styles/atoms/LinkLightThinStyles';

function LinkLightBlankThin({ label, path, text }: LinkProps) {
  return (
    <>
      <LinkLightThinStyles
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        href={path}
      >
        {text}
      </LinkLightThinStyles>
    </>
  );
}

export default LinkLightBlankThin;
