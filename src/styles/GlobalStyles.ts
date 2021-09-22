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
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${backgroundColor}
  }

  #__next {

    overflow: hidden;
  }
  main {
    width: 90vw;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
