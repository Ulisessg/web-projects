import React from 'react';

import '../../styles/atoms/footer.styl';
import Nav from '../atoms/Nav';

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
    <footer className='footer'>
      <div>
        <Nav paths={footerPaths} backgroundIsLigth={false} />
      </div>

      <div
        className='LI-profile-badge'
        data-version='v1'
        data-size='medium'
        data-locale='es_ES'
        data-type='vertical'
        data-theme='light'
        data-vanity='ulisessg'
      >
        <a
          className='LI-simple-link'
          href='https://mx.linkedin.com/in/ulisessg?trk=profile-badge'
        >
          Ulises Antonio Sámano Galván
        </a>
      </div>
    </footer>
  );
}

export default Footer;
