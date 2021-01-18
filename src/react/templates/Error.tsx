import React from 'react';

import '../../styles/templates/error-styles.styl';

import Layout from '../organisms/Layout';
import MainError from '../organisms/MainError';

const Error = (): JSX.Element => (
  <>
    <Layout>
      <MainError />
    </Layout>
  </>
);

export default Error;
