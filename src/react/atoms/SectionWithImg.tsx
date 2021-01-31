import React from 'react';

import '../../styles/organisms/sections-styles.styl';

interface SectionWithImgProps {
  sections: Array<{
    id: number;
    name: string;
    path: string;
    description: string;
  }>;

  images: Array<{ title: string; image: string }>;
}

function SectionWithImg({
  sections,
  images,
}: SectionWithImgProps): JSX.Element {
  let iteration: number = -1;
  return (
    <>
      {sections.map(
        (section): JSX.Element => {
          iteration += 1;
          return (
            <section className='section--container' key={section.id}>
              <a
                aria-label={`${section.name}, ${section.description}`}
                className='section--link'
                href={section.path}
              >
                <img
                  loading='lazy'
                  className='section--img'
                  src={images[iteration].image}
                  alt={images[iteration].title}
                />
                <h3 className='section--title'>{section.name}</h3>
                <p className='section--description'>{section.description}</p>
              </a>
            </section>
          );
        },
      )}
    </>
  );
}

export default SectionWithImg;
