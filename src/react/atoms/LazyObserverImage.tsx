import React, { useRef, useEffect, useState } from 'react';
import { imgProps } from '../interfaces';

function LazyObserverImage({ src, alt }: imgProps) {
  const Image = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notRequirePolifill, setNotRequirePolifill] = useState(
    'IntersectionObserver' in window,
  );

  useEffect(() => {
    // Just load the image when is in viewport
    if (notRequirePolifill) {
      const observer = new window.IntersectionObserver(
        (entries) => {
          if (Image.current.src.length > 1) {
            observer.disconnect();
          } else if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0 },
      );
      observer.observe(Image.current);
    } else {
      import('intersection-observer').then(() => {
        setNotRequirePolifill(true);
      });
    }
  }, [Image]);

  return (
    <>
      {notRequirePolifill === true ? (
        <img ref={Image} src={isVisible ? src : null} alt={alt} />
      ) : (
        <></>
      )}
    </>
  );
}

export default LazyObserverImage;
