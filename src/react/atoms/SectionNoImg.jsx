import React from 'react';

const SectionNoImg = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <section className='section--container' key={section.id}>
          <a
            className='section--link'
            href={section.path}
            title={`${section.name}, ${section.description}`}
          >
            <h2 className='section--title'>{section.name}</h2>
            <h3 className='section--description'>{section.description}</h3>
          </a>
        </section>
      ))}
    </>
  );
};

export default SectionNoImg;
