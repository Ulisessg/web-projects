import React from 'react';
import RoundedImageStyles from '../../styles/atoms/RoundedImageStyles';
import ImageProps from '../interfaces_and_types/atoms/ImageProps';

function RoundedImage({
  src,
  widthDesktop,
  widthLaptop,
  widthMobile,
  widthTablet,
  bottom,
}: ImageProps): JSX.Element {
  return (
    <>
      <RoundedImageStyles
        loading="lazy"
        src={src}
        widthMobile={widthMobile}
        widthTablet={widthTablet}
        widthLaptop={widthLaptop}
        widthDesktop={widthDesktop}
        bottom={bottom}
      />
    </>
  );
}

export default RoundedImage;
