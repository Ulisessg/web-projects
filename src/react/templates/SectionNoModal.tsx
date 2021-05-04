import React from 'react';

import ImageExpand from '../molecules/ImageExpand';
import LinkDarkNoBlank from '../atoms/LinkDarkNoBlank';
import {
  SectionContainer,
  ImageContainer,
  Title,
  Description,
} from '../../styles/organisms/SectionWithModalStyles';

interface temporalProps {
  sections: Array<any>;
  images: Array<any> | any;
}

function SectionNoModal({ sections, images }: temporalProps): JSX.Element {
  let iteration = -1;

  return (
    <>
      {sections.map(
        (section): JSX.Element => {
          iteration += 1;
          return (
            <SectionContainer
              id={section.id}
              className="section--container"
              key={section.id}
            >
              <ImageContainer className="section-img-container">
                <ImageExpand
                  classN="section--img"
                  src={images[iteration].image}
                  alt={images[iteration].title}
                />
              </ImageContainer>

              <Title className="section--title">{section.title}</Title>

              <Description className="section--description">
                {section.description}
              </Description>

              <LinkDarkNoBlank
                path={section.name}
                text={`Ver más sobre ${section.title}`}
                label={`Leer más sobre ${section.name}`}
              />
            </SectionContainer>
          );
        },
      )}
    </>
  );
}

export default SectionNoModal;
