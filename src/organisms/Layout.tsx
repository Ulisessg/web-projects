import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../molecules/Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  textLight: '#FFFFFF',
  textDark: '#000000',
  textDark2: '#263238',
  backgroundLight: '#8FDAF7',
  backgroundLight2: '#F7A8B8',
  backgroundDark: '#6C99AB',
};

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
