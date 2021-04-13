import React, { lazy, Suspense } from 'react';

import ReactDom from 'react-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import Loading from '../atoms/Loading';

if (process.env.NODE_ENV !== 'development') {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

//  App
const Blog = lazy(() => import('../templates/Blog'));

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <Blog />
    </Suspense>
  </>,
  document.getElementById('root'),
);
