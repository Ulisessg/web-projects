import { createGlobalStyle } from 'styled-components';
import { backgroundColor } from './variables';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-family: Helvetica, sans-serif;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${backgroundColor}
  }

  #root {
    overflow: hidden;
    overflow: -moz-hidden-unscrollable;
  }
  #main {
    width: 90vw;
    margin: 0 auto;

    overflow: hidden;
    overflow: -moz-hidden-unscrollable;
  }
`;

export default GlobalStyles;
