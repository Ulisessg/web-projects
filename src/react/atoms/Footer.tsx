import React from 'react';

import '../../styles/atoms/footer.styl';

import Nav from './Nav';

interface Link {
  id: number;
  path: string;
  name: string;
  description: string;
}

const links: Array<Link> = [
  {
    id: 1,
    path: 'https://github.com/Ulisessg',
    name: 'GitHub',
    description: 'Mi repositorio de GitHub',
  },
  {
    id: 2,
    path: 'https://www.linkedin.com/in/ulisessg/',
    name: 'LinkedIn',
    description: 'Mi LinkedIn',
  },
  {
    id: 3,
    path: 'https://twitter.com/Ulises5G',
    name: 'Twitter',
    description: 'Mi Twitter',
  },
  {
    id: 4,
    path: 'https://platzi.com/p/UlisesSG/',
    name: 'Perfil de platzi',
    description: 'Mi perfil de platzi',
  },
];

function Footer(): JSX.Element {
  return (
    <footer className='footer'>
      <div>
        <Nav paths={links} />
      </div>
      {/* LinkedIn profile */}

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
