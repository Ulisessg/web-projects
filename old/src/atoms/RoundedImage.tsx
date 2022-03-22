import React, { FunctionComponent } from 'react';
import RoundedImageStyles from '../styles/atoms/RoundedImageStyles';
import { RoundedImageProps } from '../types/props';

const RoundedImage: FunctionComponent<RoundedImageProps> = (
  props: RoundedImageProps
) => {
  return (
    <>
      <RoundedImageStyles loading='lazy' bottom={props.bottom} {...props} />
    </>
  );
};

export default RoundedImage;
