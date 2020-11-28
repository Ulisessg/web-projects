import React from 'react';

const SectionWithImg = ({ sections, images }) => {
  let iteration = -1;
  return (
    <>
      {sections.map((section) => {
        iteration++;
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
              <h2 className='section--title'>{section.name}</h2>
              <h3 className='section--description'>{section.description}</h3>
            </a>
          </section>
        );
      })}
    </>
  );
};

export default SectionWithImg;
