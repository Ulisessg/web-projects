import React from 'react';
import LinkDarkStyles from '../styles/atoms/LinkDarkStyles';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';

function LinkDarkBlank({
  label,
  path,
  text,
  className,
}: LinkProps): JSX.Element {
  return (
    <>
      <LinkDarkStyles
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        href={path}
        className={className}
      >
        <span>{text}</span>
      </LinkDarkStyles>
    </>
  );
}

export default LinkDarkBlank;
