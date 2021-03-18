import React from 'react';
import { imgProps } from '../interfaces';

function LazyImage({ src, alt }: imgProps) {
  return (
    <>
      <img loading="lazy" src={src} alt={alt} />
    </>
  );
}

export default LazyImage;
