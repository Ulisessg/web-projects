import React from 'react';

const Nav = ({ paths }) => {
  return (
    <nav className='header__nav'>
      <span aria-roledescription='Skip links'>
        <a href='#secciones' className='skip-links'>
          Menú de secciones
        </a>
      </span>
      <ul className='header__ul' id='secciones'>
        {paths.map((path) => (
          <li className='ul__li' key={path.id}>
            <a className='ul__li--a' href={path.path}>
              {path.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
