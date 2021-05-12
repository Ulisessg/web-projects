import styled from 'styled-components';
import { buttonDarkColor, backgroundDark } from '../variables';

const ButtonCloseStyles = styled.button`
  margin-bottom: -33px !important;
  align-self: flex-end;
  font-size: 1.5rem;
  margin: 0px 2px 0px 0px;
  background-color: ${buttonDarkColor};
  color: white;
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${backgroundDark};
  }
`;

export default ButtonCloseStyles;
