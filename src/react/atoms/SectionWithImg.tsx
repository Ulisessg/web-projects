import React from 'react';

type SectionType = {
  id: number;
  name: string;
  path: string;
  description: string;
};

type ImageType = {
  title: string;
  image: string;
};

type PropTypes = {
  sections: Array<SectionType>;
  images: Array<ImageType>;
};

const SectionWithImg: React.FC<PropTypes> = ({ sections, images }) => {
  let iteration: number = -1;
  return (
    <>
      {sections.map((section) => {
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
