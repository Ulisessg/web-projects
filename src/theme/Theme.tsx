import { ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#FEFEFE',
  },
};

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      primary: string;
    };
  }
}
export default function Theme({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
