import React from 'react';
import dynamic from 'next/dynamic';
import { imgProps } from '../interfaces_and_types/globalPropsAndProperties';
import LoadingSpinner from '../atoms/Loading';

const Element = dynamic(() => {
  if (navigator !== undefined && 'loading' in HTMLImageElement.prototype) {
    return import('../atoms/LazyImage');
  }
  return import('../atoms/LazyObserverImage');
}, { ssr: false, loading: () => <LoadingSpinner /> });

function Img({
  src, alt, classN, className,
}: imgProps): JSX.Element {
  return (
    <>
      <Element className={className || classN} src={src} alt={alt} />
    </>
  );
}

export default Img;
