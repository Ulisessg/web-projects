import { createGlobalStyle } from 'styled-components';

const ClassesStyles = createGlobalStyle`
  .image-expand-image-styles {
    cursor: pointer;
    &:focus {
      transform: scale(1.2)
    }
    &:active {
      transform: scale(2)
    }
  }
`;

export default ClassesStyles;
