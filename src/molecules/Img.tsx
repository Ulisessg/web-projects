import React from 'react';
import dynamic from 'next/dynamic';
import { imgProps } from '../interfaces_and_types/globalPropsAndProperties';

const Element = dynamic(() => {
  if (navigator !== undefined && 'loading' in HTMLImageElement.prototype) {
    return import('../atoms/LazyImage');
  }
  return import('../atoms/LazyObserverImage');
}, { ssr: false });

function Img({ src, alt, classN }: imgProps): JSX.Element {
  return (
    <>
      <Element className={classN} src={src} alt={alt} />
    </>
  );
}

export default Img;
