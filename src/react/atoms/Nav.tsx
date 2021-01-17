import React from 'react';

function Nav({
  paths,
}: {
  paths: Array<{ id: number; description: string; path: string; name: string }>;
}): JSX.Element {
  return (
    <nav className='header__nav'>
      <ul className='header__ul' id='secciones'>
        {paths.map(
          (path): JSX.Element => (
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
}

export default Nav;
