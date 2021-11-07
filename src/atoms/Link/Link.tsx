import React, {
  FunctionComponent,
  KeyboardEvent,
  useState,
  MouseEvent,
} from 'react';
import LinkStyles from './Link.styles';
import { LinkProps } from '@/props';
import NextLink from 'next/link';
import Loading from '../Loading';

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
