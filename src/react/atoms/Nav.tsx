import React from 'react';

import '../../styles/atoms/nav.styl';

interface NavProps {
  paths: Array<{
    description: string;
    path: string;
    name: string;
  }>;
  backgroundIsLigth: boolean;
  col?: boolean;
  blank?: boolean;
}

function Nav({
  paths,
  backgroundIsLigth,
  col = false,
  blank = false,
}: NavProps): JSX.Element {
  return (
    <nav className="nav">
      <ul className={col ? 'nav__ul--column' : 'nav__ul'} id="secciones">
        {paths.map(
          (path): JSX.Element => (
            <li className="ul__li" key={path.name}>
              <p>
                <a
                  target={blank ? '_blank' : '_self'}
                  rel="noreferrer"
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
