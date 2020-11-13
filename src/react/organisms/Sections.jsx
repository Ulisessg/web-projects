import React from 'react';
//Styles
import '../../styles/organisms/sections-styles.styl';
import SectionWithImg from '../atoms/SectionWithImg';

const Section = ({ sections, images }) => {
  return (
    <>
      <div className='sections'>
        <SectionWithImg sections={sections} images={images} />
      </div>
    </>
  );
};

export default Section;
