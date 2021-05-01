import React from 'react';
import LinkLighthStyles from '../../styles/atoms/LinkLigthStyles';

import LinkProps from '../interfaces_and_types/atoms/LinkProps';

function LinkLigthBlank({ label, text, path }: LinkProps): JSX.Element {
  return (
    <>
      <LinkLighthStyles
        target="_blank"
        rel="noreferrer noopener"
        href={path}
        aria-label={label}
      >
        {text}
      </LinkLighthStyles>
    </>
  );
}

export default LinkLigthBlank;
