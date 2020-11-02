import React from 'react';

const SectionWithImg = ({ sections, img, descriptionImg }) => {
  return (
    <>
      {sections.map((section) => (
        <section className='section' key={section.id}>
          <a className='section--link' href={section.path}>
            <img src={img} alt={descriptionImg} />
            <h2 className='section--title'>{section.name}</h2>
            <h3 className='section--description'>{section.description}</h3>
          </a>
        </section>
      ))}
    </>
  );
};

export default SectionWithImg;
