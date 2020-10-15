import React, { lazy } from 'react';

import '../../styles/organisms/header.styl';
import SkipLink from '../atoms/SkipLink';

const Nav = lazy(() => import('../atoms/Nav'));

const Header = ({ paths }) => {
  return (
    <>
      <SkipLink />
      <header className='header'>
        <Nav paths={paths} />
      </header>
    </>
  );
};

export default Header;
