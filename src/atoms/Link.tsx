import React, { FunctionComponent, KeyboardEvent, useState, MouseEvent } from 'react';
import LinkStyles from '../styles/atoms/Link.styles';
import { LinkProps } from '../types/props';
import NextLink from 'next/link';
import Loading from './Loading';

const Link: FunctionComponent<LinkProps> = (props: LinkProps) => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const handleKeyPressCapture = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter') setShowLoading(true);
  };
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setShowLoading(true);
  };

  return (
    <>
      <NextLink href={props.href}>
        <LinkStyles onClick={handleClick} onKeyPressCapture={handleKeyPressCapture} {...props} cn={props.className} cth={props.cth} bgh={props.bgh} ct={props.ct} background={props.background}>
          {showLoading ? <Loading heightExternal="5px" role="alert" aria-label={props.ariaLabel} /> : props.text}
        </LinkStyles>
      </NextLink>
    </>
  );

};

export default Link;
