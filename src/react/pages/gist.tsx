import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import LoadingSpinner from '../atoms/Loading';
import GlobalStyles from '../../styles/GlobalStyles';
import Layout from '../organisms/Layout';

const GistsTemplate = lazy(() => import('../templates/GistsTemplate'));

render(
  <>
    <Suspense fallback={<LoadingSpinner />}>
      <GlobalStyles />
      <Layout>
        <GistsTemplate />
      </Layout>
    </Suspense>
  </>,
  document.getElementById('root'),
);
