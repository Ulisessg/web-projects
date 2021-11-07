import styled from 'styled-components';
import {
  boxShadowColor,
  mobileSize,
  tabletSize,
  laptopSize,
  desktopSize,
} from '../../styles/variables';

import ImageRoundedProps from '../../interfaces_and_types/atoms/ImageProps';

const RoundedImage = styled.img<ImageRoundedProps>`
  border-radius: 50%;
  margin-bottom: ${({ bottom }) => bottom || '40px'};
  box-shadow: 0px 4px 8px 0px ${boxShadowColor};
  /* Width less than mobileSize */
  width: 100px;

  /* Media queries */
  @media screen and (min-width: ${mobileSize}) {
    width: ${({ widthMobile }) => widthMobile};
  }
  @media screen and (min-width: ${tabletSize}) {
    width: ${({ widthTablet }) => widthTablet};
  }
  @media screen and (min-width: ${laptopSize}) {
    width: ${({ widthLaptop }) => widthLaptop};
  }
  @media screen and (min-width: ${desktopSize}) {
    width: ${({ widthDesktop }) => widthDesktop};
  }
`;

export default RoundedImage;
