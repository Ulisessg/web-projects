import React from 'react';

//  Styles
import '../../styles/organisms/sections-styles.styl';
import SectionWithImg from '../atoms/SectionWithImg';

interface SectionsProps {
  sections: Array<{
    id: number;
    name: string;
    path: string;
    description: string;
  }>;
  images: Array<{ title: string; image: string }>;
}

function Section({ sections, images }: SectionsProps): JSX.Element {
  return (
    <>
      <div className='sections'>
        <SectionWithImg sections={sections} images={images} />
      </div>
    </>
  );
}

export default Section;
