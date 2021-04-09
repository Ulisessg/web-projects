/* eslint-disable object-curly-newline */
import React from 'react';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';
import LinkDarkStyles from '../../styles/atoms/LinkDarkStyles';

function LinkDarkNoBlank({ text, label, path }: LinkProps): JSX.Element {
  return (
    <>
      <LinkDarkStyles aria-label={label} href={path}>
        <span>{text}</span>
      </LinkDarkStyles>
    </>
  );
}

export default LinkDarkNoBlank;
