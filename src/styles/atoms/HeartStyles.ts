import styled, { createGlobalStyle } from 'styled-components';
import { backgroundLight } from '../variables';

const HeartStyles = styled.button`
  appearance: auto;
  width: 60px;
  height: 80px;
  border-radius: 15px;
  border: 1px solid grey;
  &::before {
    content: '❤';
    font-size: 3rem;
    color: tomato;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
    background-color: ${backgroundLight};
  }
  &:active {
    transform: scale(0.86);
  }
`;

const OtherStyles = createGlobalStyle`
  .liked {
    &::before {
      color: green;
    }
  }
`;

export { HeartStyles, OtherStyles };
