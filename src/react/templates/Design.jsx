//@ts-check
import React from 'react';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/design-styles.styl';

//Components
import Layout from '../organisms/Layout';
import MainDesign from '../organisms/MainDesign';

const Design = () => {
  return (
    <>
      <Layout>
        <div className='wrapper'>
          <MainDesign />
        </div>
      </Layout>
    </>
  );
};

export default Design;
