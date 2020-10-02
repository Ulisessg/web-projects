import React from 'react';

const Nav = ({ paths }) => {
  return (
    <nav>
      <ul>
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
