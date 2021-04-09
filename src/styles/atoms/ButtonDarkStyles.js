/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { buttonDarkColor, boxShadowColor, backgroundDark } from '../variables';

const Button = styled.button`
  border-radius: 15px;
  display: flex;
  display: --ms-flexbox;
  display: --webkit-flex;
  align-items: center;
  margin: 30px 0;
  width: 90%;
  height: 50px;
  text-align: center;
  background-color: ${buttonDarkColor};
  font-size: 2rem;
  -webkit-box-shadow: 0 2.3px 4px 0 ${boxShadowColor};
  -moz-box-shadow: 0 2.3px 4px 0 ${boxShadowColor};
  box-shadow: 0 2.3px 4px 0 ${boxShadowColor};
  border: none;
  color: white;
  justify-content: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${backgroundDark};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default Button;
