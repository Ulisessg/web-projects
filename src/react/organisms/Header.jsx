import React from 'react';

import '../../styles/organisms/header.styl';

import Nav from '../atoms/Nav';

const Header = ({ paths }) => {
  return (
    <header aria-roledescription='Navegación a las secciones las secciones del sitio'>
      <Nav paths={paths} />
    </header>
  );
};

export default Header;
