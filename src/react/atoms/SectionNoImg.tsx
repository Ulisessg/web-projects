import React from 'react';

interface SectionNoImgProps {
  sections: Array<{
    id: number;
    description: string;
    path: string;
    name: string;
  }>;
}

function SectionNoImg({ sections }: SectionNoImgProps): JSX.Element {
  return (
    <>
      {sections.map(
        (section): JSX.Element => (
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
        ),
      )}
    </>
  );
}
export default SectionNoImg;
