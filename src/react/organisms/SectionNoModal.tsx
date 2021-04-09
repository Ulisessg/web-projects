import React from 'react';

import ImgLazy from '../molecules/Img';
import LinkDark from '../atoms/LinkDark';

import '../../styles/organisms/sectionWithModal.styl';

function SectionNoModal({ sections, images, linkText = 'Leer más' }) {
  let iteration: number = -1;

  return (
    <>
      {sections.map(
        (section): JSX.Element => {
          iteration += 1;
          return (
            <section
              id={section.id}
              className="section--container"
              key={section.id}
            >
              <div className="section-img-container">
                <ImgLazy
                  classN="section--img"
                  src={images[iteration].image}
                  alt={images[iteration].title}
                />
              </div>
              <h3 className="section--title">{section.title}</h3>
              <p className="section--description">{section.description}</p>
              <LinkDark
                path={`/${section.name}`}
                text={linkText}
                label={`Leer más sobre ${section.name}`}
                blank="false"
              />
            </section>
          );
        },
      )}
    </>
  );
}

export default SectionNoModal;
