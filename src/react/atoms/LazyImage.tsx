import React from 'react';
import { imgProps } from '../interfaces';

function LazyImage({ src, alt, classN }: imgProps | any): JSX.Element {
  return (
    <>
      <img className={classN} loading="lazy" src={src} alt={alt} />
    </>
  );
}

export default LazyImage;
