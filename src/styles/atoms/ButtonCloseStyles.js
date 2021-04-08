import styled from 'styled-components';
import { buttonDarkColor, backgroundDark } from '../variables';

const ButtonCloseStyles = styled.button`
  align-self: flex-end;
  font-size: 2rem;
  margin: 10px 10px 0px 0px;
  background-color: ${buttonDarkColor};
  color: white;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${backgroundDark};
  }
`;

export default ButtonCloseStyles;
