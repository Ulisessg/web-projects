import React, { ReactElement } from 'react';

type PathType = {
  id: number;
  description: string;
  path: string;
  name: string;
};

const Nav: React.FC<{ paths: Array<PathType> }> = ({ paths }): ReactElement => (
  <nav className='header__nav'>
    <ul className='header__ul' id='secciones'>
      {paths.map(
        (path): ReactElement => (
          <li className='ul__li' key={path.id}>
            <p>
              <a
                aria-label={path.description}
                className='ul__li--a'
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

export default Nav;
