import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../molecules/Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  buttonDarkColor: '#134ead',
  boxShadowColor: '#bcbdb0',
  backgroundDark: '#012661',
  backgroundColor: '#fafafafa',
  backgroundLight: '#176085',
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
