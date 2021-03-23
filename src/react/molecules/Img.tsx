import React, { lazy } from 'react';
import { imgProps } from '../interfaces';

const Element = lazy(() => {
  if ('loading' in HTMLImageElement.prototype) {
    return import('../atoms/LazyImage');
  }
  return import('../atoms/LazyObserverImage');
});

function Img({ src, alt, classN }: imgProps | any) {
  return (
    <>
      <Element classN={classN} src={src} alt={alt} />
    </>
  );
}

export default Img;
