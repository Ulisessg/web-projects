import React, { FunctionComponent } from 'react';
import RoundedImageStyles from '../styles/atoms/RoundedImageStyles';
import ImageProps from '../interfaces_and_types/atoms/ImageProps';

const RoundedImage: FunctionComponent<ImageProps> = ({
  src,
  widthDesktop,
  widthLaptop,
  widthMobile,
  widthTablet,
  bottom,
  alt,
}: ImageProps) => {
  return (
    <>
      <RoundedImageStyles
        loading='lazy'
        src={src}
        widthMobile={widthMobile}
        widthTablet={widthTablet}
        widthLaptop={widthLaptop}
        widthDesktop={widthDesktop}
        bottom={bottom}
        alt={alt}
      />
    </>
  );
};

export default RoundedImage;
