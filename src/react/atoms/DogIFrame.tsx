import React from 'react';
import DogIframeStyles from '../../styles/atoms/DogIframeStyles';

function DogIFrame(): JSX.Element {
  return (
    <>
      <DogIframeStyles
        loading="lazy"
        src="https://www.youtube.com/embed/jxGrbtGmxnI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </>
  );
}

export default DogIFrame;
