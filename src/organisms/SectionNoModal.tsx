import React from 'react';
import ImageExpand from '../molecules/ImageExpand';
import Link from '../atoms/Link';
import {
  SectionContainer,
  ImageContainer,
  Title,
  Description,
} from '../styles/organisms/SectionStyles';
import { SectionProps } from '../types/props';
function SectionNoModal({
  image, name, description, title, id, path, loadingLabel, linkSize
}: SectionProps): JSX.Element {
  return (
    <>
      <SectionContainer
        className="section--container"
        key={id}
      >
        <ImageContainer className="section-img-container">
          <ImageExpand
            classN="section--img"
            src={image.src}
            alt={image.alt}
          />
        </ImageContainer>

        <Title className="section--title">{title}</Title>

        <Description className="section--description">
          {description}
        </Description>

        <Link
          href={path || name}
          text={`Ver más sobre ${title}`}
          background="backgroundLight"
          bgh="backgroundLight2"
          cn="some"
          ct="textDark"
          cth="textDark2"
          linkSize={linkSize}
          ariaLabel={loadingLabel}
        />
      </SectionContainer>
    </>
  );
}

export default SectionNoModal;
