import React, { lazy } from 'react';
import { connect } from 'react-redux';
import '../../styles/organisms/header.styl';
import SkipLink from '../atoms/SkipLink';

const Nav = lazy(() => import('../atoms/Nav'));

const Header = ({ headerPaths }) => {
  return (
    <>
      <SkipLink />
      <header className='header'>
        <Nav paths={headerPaths} />
      </header>
    </>
  );
};

const mapStateToProps = ({ headerPaths }) => {
  return {
    headerPaths,
  };
};
export default connect(mapStateToProps, null)(Header);
