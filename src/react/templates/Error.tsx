import React from 'react';

import '../../styles/templates/error-styles.styl';

import MainError from '../organisms/MainError';
import Layout from '../organisms/Layout';

const Error = (): JSX.Element => (
  <>
    <Layout>
      <MainError />
    </Layout>
  </>
);

export default Error;
