import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from '../reducers/index/index';
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

const IndexTemplate = lazy(() => import('../templates/IndexTemplate'));

//  App

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <IndexTemplate />
    </Suspense>
  </>,
  window.document.getElementById('root'),
);
