import React from 'react';
import '../../styles/organisms/header.styl';
import SkipLink from '../atoms/SkipLink';

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
      path: '/blog.html',
    },
    {
      id: 3,
      name: 'Sistema',
      description: 'Sistema de diseño',
      path: '/design.html',
    },
  ];

  return (
    <>
      <SkipLink />
      <header className='header'>
        <Nav paths={headerPaths} />
      </header>
    </>
  );
}

export default Header;
