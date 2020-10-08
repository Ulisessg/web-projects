import React from 'react';
import propTypes from 'prop-types';

//Styles
import '../../styles/organisms/Sections.styl';

const Section = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <section className='section' key={section.id}>
          <a href={section.path}>
            <div>
              <h4 className='title'>{section.name}</h4>
              <p className='description'>{section.description}</p>
            </div>
          </a>
        </section>
      ))}
    </>
  );
};

Section.propTypes = {
  sections: propTypes.array.isRequired,
};

export default Section;
