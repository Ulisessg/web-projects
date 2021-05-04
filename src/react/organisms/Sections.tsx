import React from 'react';

//  Styles
import '../../styles/organisms/sections-styles.styl';
import SectionWithImg from '../templates/SectionWithModal';

interface SectionsProps {
  sections: Array<{
    id: number;
    name: string;
    path: string;
    description: string;
    cover: { alt: string; src: string };
  }>;
  images: Array<{ alt: string; src: string }>;
}

function Section({ sections, images }: SectionsProps): JSX.Element {
  return (
    <>
      <div className="sections">
        {/* <SectionWithImg sections={sections} images={images} /> */}
      </div>
    </>
  );
}

export default Section;
