import React, { FunctionComponent } from 'react';

import { sections } from '../../states/designInitialState';

//  Components
import Layout from '@/organisms/Layout';
import MainDesign from '@/organisms/MainDesign';

const Design: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Layout>
        <div className='wrapper'>
          <MainDesign sections={sections} />
        </div>
      </Layout>
    </>
  );
};

export default Design;
