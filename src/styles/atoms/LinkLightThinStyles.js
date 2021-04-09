import styled from 'styled-components';
import { backgroundLight } from '../variables';

const LinkLightNoBlankThinStyles = styled.a`
  cursor: pointer;
  color: #fafafa;
  text-align: center;
  text-align: -webkit-center;
  font-size: 1.5rem;
  padding: 7px 30px;
  &:focus,
  &:hover {
    background-color: ${backgroundLight};
    padding: 5px 28px;
    border: 2px solid #fafafa;
    width: 100%;
    border-radius: 20px;
  }
`;

export default LinkLightNoBlankThinStyles;
