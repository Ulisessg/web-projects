import React from 'react';

import ImgLazy from '../molecules/Img';
import LinkDarkNoBlank from '../atoms/LinkDarkNoBlank';
import {
  Sections,
  SectionContainer,
  ImageContainer,
  Title,
  Description,
} from '../../styles/organisms/SectionWithModalStyles';

function SectionNoModal({ sections, images, linkText = 'Leer más' }) {
  let iteration: number = -1;

  return (
    <>
      <Sections>
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
                  <ImgLazy
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
      </Sections>
    </>
  );
}

export default SectionNoModal;
