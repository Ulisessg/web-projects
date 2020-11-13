//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/initialReducer';
import initialState from '../store/initialState';

import '../../styles/default-styles.styl';

const Error = lazy(() => import('../templates/Error'));

const store = createStore(reducers, initialState);

ReactDom.render(
  <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={store}>
        <Error />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
