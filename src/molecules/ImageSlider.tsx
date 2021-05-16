import React, { useState } from 'react';
import imageSliderProps from '../interfaces_and_types/molecules/ImageSliderProps';
import Img from './Img';
import ButtonsForSlider from './ButtonsForSlider';
import {
  ImageSliderStyles,
  ButtonsContainer,
} from '../styles/molecules/InternalSlider';

function ImageSlider({ images }: imageSliderProps): JSX.Element {
  const [imageIndex, setImageIndex] = useState<number>(0);

  function test(e) {
    setImageIndex(e);
  }

  let x = -1;

  return (
    <ImageSliderStyles>
      <Img src={images[imageIndex].src} alt={images[imageIndex].alt} />
      <ButtonsContainer>
        {images.map(() => {
          x += 1;
          return (
            <ButtonsForSlider
              className="image-slider--button"
              func={test}
              reference={x}
              key={x}
            />
          );
        })}
      </ButtonsContainer>
    </ImageSliderStyles>
  );
}

export default ImageSlider;
