import React, { FunctionComponent } from 'react';
import VideoStyled from './VideoStyles';

const videoUrl =
  'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/projects%2Fvideo%2Fpexels-rodnae-productions-7148187.mp4?alt=media&token=b33f187b-1294-4e7d-ba6d-b87bb94464d0';

const Video: FunctionComponent = () => {
  return (
    <>
      <VideoStyled>
        <video controls muted autoPlay={false} src={videoUrl} />

        <p>Vídeo de RODNAE Productions en Pexels</p>
      </VideoStyled>
    </>
  );
};

export default Video;
