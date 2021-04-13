import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GlobalStyles from '../../styles/GlobalStyles';
import reducers from '../reducers/design';
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

const Design = React.lazy(() => import('../templates/Design'));
const store = createStore(reducers, {});

ReactDom.render(
  <>
    <React.Suspense fallback={<Loading />}>
      <Provider store={store}>
        <GlobalStyles />
        <Design />
      </Provider>
    </React.Suspense>
  </>,
  window.document.getElementById('root'),
);
