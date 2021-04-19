import styled from 'styled-components';
import { backgroundDark } from '../variables';

const Header = styled.header`
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

  & a {
    align-self: center;
  }
  & img {
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
  & nav ul li p a {
    display: flex;
    font-size: 1rem !important;
    padding: 7px 30px;
    @media screen and (max-width: 450px) {
      padding: 7px 15px;
    }
  }
`;

export default Header;
