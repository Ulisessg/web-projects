import React, { useState, useRef } from 'react';
import imageSliderProps from '../interfaces_and_types/molecules/ImageSliderProps';
import Img from './Img';
import CircleButton from '../atoms/circleButton';
import ImageSliderStyles from '../../styles/molecules/ImageSliderStyles';

function Buttons({
  func,
  reference,
}: {
  func: any;
  reference: number;
}): JSX.Element {
  return (
    <>
      <div>
        <CircleButton func={() => func(reference)} />
      </div>
    </>
  );
}

function ImageSlider({ images }: imageSliderProps): JSX.Element {
  const [imageIndex, setImageIndex] = useState<number>(0);

  function test(e) {
    setImageIndex(e);
  }

  let x = -1;

  return (
    <ImageSliderStyles>
      <Img src={images[imageIndex].src} alt={images[imageIndex].alt} />
      {images.map(() => {
        x += 1;
        return <Buttons func={test} reference={x} key={x} />;
      })}
    </ImageSliderStyles>
  );
}

export default ImageSlider;
