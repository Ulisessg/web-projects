import React from 'react';

import '../../styles/atoms/footer.styl';
import Nav from '../atoms/Nav';
import LinkedInBadge from './LinkedInBadge';

interface Path {
  id: number;
  name: string;
  description: string;
  path: string;
}

function Footer(): JSX.Element {
  const footerPaths: Array<Path> = [
    {
      id: 1,
      description: 'Mi Twitter',
      name: 'Mi Twitter',
      path: 'https://twitter.com/Ulises5G',
    },
    {
      id: 2,
      description: 'Mi perfil de Platzi',
      name: 'Perfil de platzi',
      path: 'https://platzi.com/p/UlisesSG/',
    },
    {
      id: 3,
      description: 'Mi LinkedIn',
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/in/ulisessg/',
    },
    {
      id: 4,
      description: 'Mi repositorio de GitHub',
      name: 'Github',
      path: 'https://github.com/Ulisessg',
    },
  ];
  return (
    <footer className="footer" id="contacto">
      <LinkedInBadge />
      <div>
        <Nav paths={footerPaths} backgroundIsLigth={false} />
      </div>
    </footer>
  );
}

export default Footer;
