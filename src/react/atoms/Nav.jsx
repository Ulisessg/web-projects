import React from 'react';

const Nav = ({ paths }) => {
  return (
    <nav>
      <span aria-roledescription='Skip links'>
        <a href='#secciones' className='skip-links'>
          Menú de secciones
        </a>
      </span>
      <ul id='secciones'>
        {paths.map((path) => (
          <li key={path.id}>
            <a href={path.path}>{path.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
