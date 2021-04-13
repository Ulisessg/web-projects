import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import Loading from '../atoms/Loading';
import GlobalStyles from '../../styles/GlobalStyles';

if (process.env.NODE_ENV !== 'development') {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

const Error = lazy(() => import('../templates/Error'));

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <Error />
    </Suspense>
  </>,
  window.document.getElementById('root'),
);
