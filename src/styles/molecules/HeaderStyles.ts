import styled, { createGlobalStyle } from 'styled-components';
import { backgroundDark } from '../variables';

export const HeaderContainer = styled.header`
  width: 100vw;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  height: 10vh;
  background-color: ${backgroundDark};

  & ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const ClassessStyles = createGlobalStyle`
  .header-link {
    align-self: center;
  }
  .header__logo--img {
    height: 50px;
    width: 50px;
    align-self: center;
    margin-left: 10px;

    @media screen and (max-width: 360px) {
      width: 40px;
      height: 40px;
    }

    @media screen and (orientation: landscape) {
      width: 40px;
      height: 40px;
    }
  }
  header nav ul li p a {
    display: flex;
    font-size: 1rem !important;
    padding: 7px 30px;
    @media screen and (max-width: 450px) {
      padding: 7px 15px;
    }
  }
`;
