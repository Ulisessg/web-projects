import React from 'react';

import { sections } from '../states/designInitialState';
//  Styles
// import '../styles/templates/design-styles.styl';

//  Components
import Layout from '../organisms/Layout';
import MainDesign from '../organisms/MainDesign';

function Design(): JSX.Element {
  return (
    <>
      <Layout>
        <div className="wrapper">
          <MainDesign sections={sections} />
        </div>
      </Layout>
    </>
  );
}

export default Design;
