import styled from 'styled-components';
import { buttonDarkColor, backgroundDark, boxShadowColor } from '../variables';

const Link = styled.a`
  border-radius: 15px;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
  width: 90%;
  height: 50px;
  text-align: -webkit-center;
  text-align: center;
  background-color: ${buttonDarkColor};
  color: #fff;
  box-shadow: 0px 1px 8px 0px grey;
  -webkit-box-shadow: 0px 1px 8px 0px ${boxShadowColor};
  -moz-box-shadow: 0px 1px 8px 0px ${boxShadowColor};
  &:hover,
  &:focus {
    background-color: ${backgroundDark};
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default Link;
