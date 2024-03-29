import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const DogIframeStyles = styled.iframe`
  width: 560px;
  height: 315px;
`;

const DogIFrame: FunctionComponent = () => {
  return (
    <>
      <DogIframeStyles
        src='https://www.youtube.com/embed/jxGrbtGmxnI'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </>
  );
};

export default DogIFrame;
