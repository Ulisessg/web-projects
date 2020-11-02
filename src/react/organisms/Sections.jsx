import React from 'react';
//Styles
import '../../styles/organisms/sections-styles.styl';
import SectionNoImg from '../atoms/SectionNoImg';

const Section = ({ sections }) => {
  return (
    <>
      <div className='sections'>
        <SectionNoImg sections={sections} />
      </div>
    </>
  );
};

export default Section;
