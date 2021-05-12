import styled from 'styled-components';
import { backgroundLight, backgroundDark } from '../variables';

const ButtonGoBackStyles = styled.button`
  margin: 0 auto;
  border-radius: 20px;
  border: none;
  background-color: ${backgroundLight};
  color: #fafafa;
  font-size: 2rem;
  padding: 10px;
  &:focus,
  &:hover {
    background-color: ${backgroundDark};
    cursor: pointer;
  }
`;

export default ButtonGoBackStyles;
