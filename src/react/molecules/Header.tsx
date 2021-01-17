import React from 'react';
import { connect } from 'react-redux';
import '../../styles/organisms/header.styl';
import SkipLink from '../atoms/SkipLink';

import Nav from '../atoms/Nav';

const Header = ({ headerReducer }) => {
  const { headerPaths } = headerReducer;
  return (
    <>
      <SkipLink />
      <header className='header'>
        <Nav paths={headerPaths} />
      </header>
    </>
  );
};

const mapStateToProps = ({ headerReducer }) => {
  return { headerReducer };
};

export default connect(mapStateToProps, null)(Header);
