import React, { useEffect, useRef, useState } from 'react';
import { imgProps } from '../interfaces';

function LazyDefaultImage({ src, alt }: imgProps) {
  const Element = useRef(null);

  function handleScroll(e): void {
    console.log(e);
  }

  return (
    <>
      <img ref={Element} src={src} alt={alt} />
    </>
  );
}

export default LazyDefaultImage;
