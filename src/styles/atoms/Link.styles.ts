import styled from "styled-components";
import { LinkProps } from "../../types/props";

const LinkStyles = styled.a<
  Pick<LinkProps, "background" | "ct" | "bgh" | "cth" | "linkSize" | "noShadow">
>`
  display: grid;
  width: ${({ linkSize, theme }) => {
    return theme["buttonSizes"][linkSize].width;
  }};
  max-width: 90%;
  height: ${({ linkSize, theme }) => {
    return theme["buttonSizes"][linkSize].height;
  }};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 20px auto;
  padding: 10px;
  background-color: ${({ theme, background }) => theme[background]};
  text-align: center;
  color: ${({ theme, ct }) => theme[ct]};
  ${({ noShadow }) => (noShadow ? "" : "box-shadow: 0px 2px 8px 0px #b4b4b4;")}
  /* transitions */
  transition: background-color ease-in 0.15s, transform ease-in 0.1s, color ease-out 0.15s;

  &:focus,
  &:hover {
    background-color: ${({ theme, bgh }) => theme[bgh]};
    color: ${({ theme, cth }) => theme[cth]};
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default LinkStyles;
