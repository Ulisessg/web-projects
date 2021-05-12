import React, { lazy } from 'react';
import { imgProps } from '../interfaces_and_types/globalPropsAndProperties';

// const Element = lazy(() => {
//   if (navigator !== undefined && 'loading' in HTMLImageElement.prototype) {
//     return import('../atoms/LazyImage');
//   }
//   return import('../atoms/LazyObserverImage');
// });

function Img({ src, alt, classN }: imgProps): JSX.Element {
  return (
    <>
      <img className={classN} src={src} alt={alt} />
    </>
  );
}

export default Img;
