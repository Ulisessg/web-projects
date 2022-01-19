import React, {
  FunctionComponent,
  KeyboardEvent,
  useState,
  MouseEvent,
} from 'react';
import { LinkProps } from '@/props';
import NextLink from 'next/link';
import Loading from '../Loading';
import styled from 'styled-components';

const LinkStyles = styled.a<
  Pick<LinkProps, 'background' | 'ct' | 'bgh' | 'cth' | 'linkSize' | 'noShadow'>
>`
  display: grid;
  max-width: 100%;
  height: ${({ linkSize, theme }) => {
    return theme['buttonSizes'][linkSize].height;
  }};
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 20px auto;
  padding: 10px;
  // background-color: ${({ theme, background }) => theme[background]};
  text-align: center;
  color: ${({ theme }) => theme['linkColor']};
  /* transitions */
  transition: text-decoration ease-in 0.15s, transform ease-in 0.1s,
    color ease-out 0.15s;

  &:focus,
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme['textDark']};
    color: ${({ theme, cth }) => theme[cth]};
  }
  &:active {
    transform: scale(0.9);
  }
`;

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
        <LinkStyles
          {...props}
          onClick={handleClick}
          onKeyPressCapture={handleKeyPressCapture}
          linkSize={props.linkSize}
          cth={props.cth}
          bgh={props.bgh}
          ct={props.ct}
          background={props.background}
        >
          {props.noSpinner ? (
            props.text
          ) : showLoading ? (
            <Loading
              heightExternal='5px'
              role='alert'
              aria-label={props.ariaLabel}
            />
          ) : (
            props.text
          )}
        </LinkStyles>
      </NextLink>
    </>
  );
};

export default Link;
