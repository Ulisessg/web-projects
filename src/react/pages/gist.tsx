import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import LoadingSpinner from '../atoms/Loading';
import GlobalStyles from '../../styles/GlobalStyles';
import Layout from '../organisms/Layout';

if (process.env.NODE_ENV !== 'development') {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

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
