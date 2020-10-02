import React from 'react';

import '../../styles/organisms/header.styl';

import Nav from '../atoms/Nav';

const Header = ({ paths }) => {
  return (
    <header>
      <Nav paths={paths} />
    </header>
  );
};

export default Header;
