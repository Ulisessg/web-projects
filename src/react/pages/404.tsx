//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Loading from '../atoms/Loading';
import reducers from '../reducers/error';

import '../../styles/default-styles.styl';

const Error = lazy(() => import('../templates/Error'));

const store = createStore(reducers, {});

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Error />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
