import React from 'react';
import Header from '../molecules/Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

function Layout({ children }: { children: React.ReactNode; }): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
