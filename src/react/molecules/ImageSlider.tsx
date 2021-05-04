import React, { useState } from 'react';
import imageSliderProps from '../interfaces_and_types/molecules/ImageSliderProps';
import Img from './Img';
import CircleButton from '../atoms/CircleButton';
import {
  ImageSliderStyles,
  ButtonsContainer,
} from '../../styles/molecules/InternalSlider';

function Buttons({
  func,
  reference,
  className,
}: {
  func: any;
  reference: number;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}): JSX.Element {
  return (
    <>
      <div>
        <CircleButton className={className} func={() => func(reference)} />
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
      <ButtonsContainer>
        {images.map(() => {
          x += 1;
          return (
            <Buttons
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
