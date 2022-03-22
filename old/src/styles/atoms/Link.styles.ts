import styled from 'styled-components';
import { LinkProps } from '../../types/props';

const LinkStyles = styled.a<
  Pick<LinkProps, 'background' | 'ct' | 'bgh' | 'cth' | 'linkSize' | 'noShadow'>
>`
  display: grid;
  max-width: 100%;
  height: ${({ linkSize, theme }) => {
    return theme['buttonSizes'][linkSize].height;
  }};
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 20px auto;
  padding: 10px;
  // background-color: ${({ theme, background }) => theme[background]};
  text-align: center;
  color: ${({ theme }) => theme['linkColor']};
  /* transitions */
  transition: text-decoration ease-in 0.15s, transform ease-in 0.1s,
    color ease-out 0.15s;

  &:focus,
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme['textDark']};
    color: ${({ theme, cth }) => theme[cth]};
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default LinkStyles;
