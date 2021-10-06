import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textLight: string;
    textDark: string;
    textDark2: string;
    backgroundLight: string;
    backgroundLight2: string;
    backgroundDark: string;
  }
}

export const theme: DefaultTheme = {
  textLight: '#FFFFFF',
  textDark: '#000000',
  textDark2: '#263238',
  backgroundLight: '#8FDAF7',
  backgroundLight2: '#F7A8B8',
  backgroundDark: '#6C99AB',
};
