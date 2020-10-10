import React from 'react';

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
                <h2 className='section__details--title'>{section.name}</h2>
                <h3 className='section__details--description'>
                  {section.description}
                </h3>
              </div>
            </a>
          </section>
        ))}
      </div>
    </>
  );
};

export default Section;
