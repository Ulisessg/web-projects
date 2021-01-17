import React from 'react';
import Header from '../molecules/Header';
import Footer from '../atoms/Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
