import React from 'react';

import '../../styles/atoms/nav.styl';

interface NavProps {
  paths: Array<{
    id: number;
    description: string;
    path: string;
    name: string;
  }>;
  backgroundIsLigth: boolean;
}

function Nav({ paths, backgroundIsLigth }: NavProps): JSX.Element {
  return (
    <nav className='nav'>
      <ul className='nav__ul' id='secciones'>
        {paths.map(
          (path): JSX.Element => (
            <li className='ul__li' key={path.id}>
              <p>
                <a
                  aria-label={path.description}
                  className={
                    backgroundIsLigth
                      ? 'ul__li--a ul__li--a-ligth'
                      : 'ul__li--a ul__li--a-dark'
                  }
                  href={path.path}
                >
                  {path.name}
                </a>
              </p>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

export default Nav;
