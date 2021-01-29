import React from 'react';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/design-styles.styl';
import '../../styles/atoms/footer.styl';
import '../../styles/organisms/header.styl';
import '../../styles/atoms/skipLink.styl';

//  Components
import MainDesign from '../organisms/MainDesign';

function Design(): JSX.Element {
  return (
    <>
      <div className='wrapper'>
        <MainDesign />
      </div>
    </>
  );
}

export default Design;
