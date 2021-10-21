import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textLight: string;
    textDark: string;
    textDark2: string;
    backgroundLight: string;
    backgroundLight2: string;
    backgroundDark: string;
    boxShadow: string;
    linkColor: string;
    buttonSizes: {
      small: {
        width: string;
        height: string;
      };
      medium: {
        width: string;
        height: string;
      };
      large: {
        width: string;
        height: string;
      };
      xl: {
        width: string;
        height: string;
      };
    };
  }
}

export const theme: DefaultTheme = {
  textLight: '#FFFFFF',
  textDark: '#000000',
  textDark2: '#263238',
  backgroundLight: '#8FDAF7',
  backgroundLight2: '#F7A8B8',
  backgroundDark: '#6C99AB',
  boxShadow: '#e0e0e0',
  linkColor: '#0062FF',
  buttonSizes: {
    small: {
      width: '80px',
      height: '40px',
    },
    medium: {
      width: '200px',
      height: '60px',
    },
    large: {
      width: '350px',
      height: '70px',
    },
    xl: {
      width: '400px',
      height: '80px',
    },
  },
};
