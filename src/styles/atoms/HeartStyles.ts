import styled, { createGlobalStyle } from "styled-components";
import { backgroundLight } from "../variables";

const HeartStyles = styled.button<{ className: string }>`
  appearance: auto;
  width: 60px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid grey;
  &::before {
    content: "❤";
    font-size: 2.8rem;
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
