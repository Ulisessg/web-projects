import React, { ReactElement } from 'react';

type SectionType = {
  id: number;
  description: string;
  path: string;
  name: string;
};

type PropTypes = { sections: Array<SectionType> };

const SectionNoImg: React.FC<PropTypes> = ({ sections }) => (
  <>
    {sections.map(
      (section: SectionType): ReactElement => (
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

export default SectionNoImg;
