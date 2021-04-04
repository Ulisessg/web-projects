import React from 'react';

import ImgLazy from '../molecules/Img';

import '../../styles/organisms/sectionWithModal.styl';

function SectionNoModal({ sections, images }) {
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
              <a
                href={`/${section.name}`}
                aria-label={`Leer más sobre ${section.name}`}
                className="section--link ul__li--a-dark section-modal-button"
              >
                <span>Leer más</span>
              </a>
            </section>
          );
        },
      )}
    </>
  );
}

export default SectionNoModal;
