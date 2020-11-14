//@ts-check
import React from 'react';
import Header from '../molecules/Header';
import Footer from '../atoms/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
