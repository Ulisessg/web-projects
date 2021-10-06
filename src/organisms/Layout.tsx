import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../molecules/Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import { theme } from '../constants';

function Layout({ children }: { children: ReactElement<any>; }): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
