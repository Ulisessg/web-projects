import React from 'react';
import SkipLink from '../atoms/SkipLink';
import Img from './Img';
import Nav from './NavDarkNoBlank';
import LinkProps from '../interfaces_and_types/atoms/LinkProps';
import HeraderStyles from '../styles/molecules/HeaderStyles';

function Header(): JSX.Element {
  const headerPaths: Array<LinkProps> = [
    {
      text: 'About',
      label: 'Sobre mí',
      path: '/',
    },
    {
      text: 'Blog',
      label: 'Blog sobre tecnología',
      path: '/blog',
    },
    {
      text: 'GitHub',
      label: 'Mi cuenta en GitHub',
      path: 'https://github.com/Ulisessg',
    },
    {
      text: 'Gists',
      label: 'Piezas de código que comparto',
      path: '/gist',
    },
  ];

  return (
    <>
      {/* <SkipLink /> */}
      <HeraderStyles className="header">
        <a href="/">
          <Img
            classN="header__logo--img"
            alt="Logo"
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888"
          />
        </a>
        <Nav dir="row" paths={headerPaths} />
      </HeraderStyles>
    </>
  );
}

export default Header;
