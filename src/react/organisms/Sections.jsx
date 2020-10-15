import React from 'react';

//Styles
import '../../styles/organisms/sections-styles.styl';

const Section = ({ sections }) => {
  return (
    <>
      <div className='sections'>
        {sections.map((section) => (
          <section className='section' key={section.id}>
            <a className='section--link' href={section.path}>
              <h2 className='section--title'>{section.name}</h2>
              <h3 className='section--description'>{section.description}</h3>
            </a>
          </section>
        ))}
      </div>
    </>
  );
};

export default Section;
