import React from 'react';

import Footer from '../atoms/Footer';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <div />
    {children}
    <Footer />
  </>
);

export default Layout;
