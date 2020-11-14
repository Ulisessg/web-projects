//@ts-check
import React from 'react';

import '../../styles/templates/error-styles.styl';

import Layout from '../organisms/Layout';
import MainError from '../organisms/MainError';

const Error = () => {
  return (
    <>
      <Layout>
        <div className='wrapper'>
          <MainError />
        </div>
      </Layout>
    </>
  );
};

export default Error;
