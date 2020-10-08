import React, { lazy } from 'react';

import '../../styles/organisms/header.styl';

const Nav = lazy(() => import('../atoms/Nav'));

const Header = ({ paths }) => {
  return (
    <header aria-roledescription='Navegación a las secciones las secciones del sitio'>
      <Nav paths={paths} />
    </header>
  );
};

export default Header;
