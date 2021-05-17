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

export const HeaderClassesStyles = createGlobalStyle`
  .header-link {
    align-self: center;
  }

  header img {
    height: 40px;
    width: 40px;
    align-self: center;
    margin-left: 10px;
  }
  header nav ul li p a {
    display: flex;
    font-size: 1rem !important;

    @media screen and (max-width: 450px) {
      padding: 4px 10px !important;
    }
  }
`;
