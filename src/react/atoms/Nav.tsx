import React from 'react';

const Nav = ({ paths }) => {
  return (
    <nav className='header__nav'>
      <ul className='header__ul' id='secciones'>
        {paths.map((path) => (
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
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
