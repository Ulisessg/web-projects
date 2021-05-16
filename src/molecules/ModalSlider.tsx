import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import LinksSlider from './LinkSlider';
import { ButtonsContainer } from '../styles/molecules/InternalSlider';
import { imgProps, LinkProps } from '../interfaces_and_types/globalPropsAndProperties';

function ModalSlider({ description, images, links }: {
  images: Array<imgProps>;
  description: string;
  links: Array<LinkProps>;
}): JSX.Element {
  const [sliderPosition, setSliderPosition] = useState<number>(1);

  function handleClick(e) {
    if (e.target.outerText === 'Adelante') {
      if (sliderPosition === 3) {
        setSliderPosition(1);
      } else {
        setSliderPosition(sliderPosition + 1);
      }
      // Atras
    } else if (sliderPosition === 1) {
      setSliderPosition(3);
    } else {
      setSliderPosition(sliderPosition - 1);
    }
  }

  return (
    <>
      <button onClick={handleClick} type="button">Atras</button>
      {sliderPosition === 1 && <p>{description}</p>}
      {sliderPosition === 2 && (
        <ButtonsContainer>
          <div>
            <LinksSlider links={links} />
          </div>
        </ButtonsContainer>
      )}
      {sliderPosition === 3 && <ImageSlider images={images} />}
      <button onClick={handleClick} type="button">Adelante</button>
    </>
  );
}

export default ModalSlider;
