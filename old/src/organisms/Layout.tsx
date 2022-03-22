import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../molecules/Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import { theme } from '../constants';
import { LayoutProps } from '../types/props';

const Layout: FunctionComponent<LayoutProps> = (
  props: LayoutProps
): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        {props.children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
