import styled from 'styled-components';
import { backgroundDark, backgroundLight } from '../variables';

const CircleButtonStyles = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: ${backgroundDark};
  &:active {
    transform: scale(0.9);
  }
  &:focus,
  &:hover {
    background-color: ${backgroundLight};
  }
`;

export default CircleButtonStyles;
