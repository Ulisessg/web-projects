import styled from 'styled-components';
import { backgroundLight, backgroundDark } from '../variables';

const LinkLigthStyles = styled.a`
  cursor: pointer;
  color: #fafafa;
  background-color: ${backgroundLight};
  text-align: center;
  font-size: 1.5rem;
  padding: 7px 30px;
  border-radius: 20px;
  &:hover,
  &:focus {
    border: 3px solid #a5a5a5;
    padding: 4px 27px;
    background-color: ${backgroundDark};
  }
`;

export default LinkLigthStyles;
