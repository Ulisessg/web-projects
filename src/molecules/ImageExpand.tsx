import React from 'react';
import Img from './Img';
import { imgProps } from '../interfaces_and_types/globalPropsAndProperties';
import ClassesStyles from '../../styles/molecules/ImageExpandStyles';

function ImageExpand({ alt, src, classN }: imgProps): JSX.Element {
  return (
    <>
      <ClassesStyles />
      <Img
        tabIndex={0}
        classN={`image-expand-image-styles ${classN}`}
        alt={alt}
        src={src}
      />
    </>
  );
}

export default ImageExpand;
