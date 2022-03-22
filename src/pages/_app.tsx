import React from 'react';
import Theme from '../theme/Theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  }
  html {
    font-size: 20px;
  }
  body {
    background-color: ${({ theme }) => theme.colors.primary} ;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </Theme>
    </>
  );
}
