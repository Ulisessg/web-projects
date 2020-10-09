import React from 'react';
import propTypes from 'prop-types';

//Styles
import '../../styles/organisms/Sections.styl';

const Section = ({ sections }) => {
  return (
    <>
      <div className='sections'>
        {sections.map((section) => (
          <section className='section' key={section.id}>
            <a href={section.path}>
              <div className='section__details'>
                <h2 className='title'>{section.name}</h2>
                <h3 className='description'>{section.description}</h3>
              </div>
            </a>
          </section>
        ))}
      </div>
    </>
  );
};

Section.propTypes = {
  sections: propTypes.array.isRequired,
};

export default Section;
