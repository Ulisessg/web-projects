import React from 'react';
import '../../styles/organisms/header.styl';
import SkipLink from '../atoms/SkipLink';
import Img from './Img';
import Nav from '../atoms/Nav';

interface Path {
  id: number;
  name: string;
  description: string;
  path: string;
}

function Header(): JSX.Element {
  const headerPaths: Array<Path> = [
    {
      id: 1,
      name: 'About',
      description: 'Sobre mí',
      path: '/',
    },
    {
      id: 2,
      name: 'Blog',
      description: 'Blog sobre tecnología',
      path: '/blog',
    },
    {
      id: 3,
      name: 'GitHub',
      description: 'Mi cuenta en GitHub',
      path: 'https://github.com/Ulisessg',
    },
  ];

  return (
    <>
      <SkipLink />
      <header className="header">
        <a href="/">
          <Img
            classN="header__logo"
            alt="Logo"
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888"
          />
        </a>
        <Nav paths={headerPaths} backgroundIsLigth={false} />
      </header>
    </>
  );
}

export default Header;
