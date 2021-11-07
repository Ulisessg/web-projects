import React, { FunctionComponent } from 'react';
import RoundedImageStyles from './RoundedImageStyles';
import { RoundedImageProps } from '@/props';

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
