import React from 'react';

import '../../styles/atoms/nav.styl';

const Nav = ({ paths }) => {
  return (
    <nav className='header__nav'>
      <ul className='header__ul' id='secciones'>
        {paths.map((path) => (
          <li className='ul__li' key={path.id}>
            <p>
              <a className='ul__li--a' href={path.path}>
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
