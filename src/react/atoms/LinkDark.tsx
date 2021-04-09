/* eslint-disable object-curly-newline */
import React from 'react';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';
import LinkDarkStyles from '../../styles/atoms/LinkDarkStyles';

function LinkDark({ text, label, path, blank }: LinkProps): JSX.Element {
  return (
    <>
      {blank ? (
        <LinkDarkStyles
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          href={path}
        >
          <span>{text}</span>
        </LinkDarkStyles>
      ) : (
        <LinkDarkStyles aria-label={label} href={path}>
          <span>{text}</span>
        </LinkDarkStyles>
      )}
    </>
  );
}

export default LinkDark;
