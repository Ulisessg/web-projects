import React from 'react';
import { connect } from 'react-redux';
import '../../styles/organisms/header.styl';
import SkipLink from '../atoms/SkipLink';

import Nav from '../atoms/Nav';

function Header({ headerReducer }: any): JSX.Element {
  const { headerPaths } = headerReducer;
  return (
    <>
      <SkipLink />
      <header className='header'>
        <Nav paths={headerPaths} />
      </header>
    </>
  );
}

function mapStateToProps({ headerReducer }: { headerReducer: any }) {
  return { headerReducer };
}

export default connect(mapStateToProps, null)(Header);
