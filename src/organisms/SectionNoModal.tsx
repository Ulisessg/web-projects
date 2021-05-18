import React from 'react';
import ImageExpand from '../molecules/ImageExpand';
import LinkDarkNoBlank from '../atoms/LinkDarkNoBlank';
import {
  SectionContainer,
  ImageContainer,
  Title,
  Description,
} from '../styles/organisms/SectionStyles';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';

function SectionNoModal({
  image, name, description, title, id,
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

        <LinkDarkNoBlank
          path={name}
          text={`Ver más sobre ${title}`}
          label={`Leer más sobre ${name}`}
        />
      </SectionContainer>
    </>
  );
}

export default SectionNoModal;
