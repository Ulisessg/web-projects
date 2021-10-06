import React, { FunctionComponent } from 'react';
import LinkStyles from '../styles/atoms/Link.styles';
import { LinkProps } from '../types/props';
import NextLink from 'next/link';

const Link: FunctionComponent<LinkProps> = (props: LinkProps) => (
  <>
    <NextLink href={props.href}>
      <LinkStyles {...props} cn={props.className} cth={props.cth} bgh={props.bgh} ct={props.ct} background={props.background}>
        {props.text}
      </LinkStyles>
    </NextLink>
  </>
);

export default Link;
