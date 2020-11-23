//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/initialReducer';
import initialState from '../store/initialState';
import Loading from '../atoms/Loading';

const Design = lazy(() => import('../templates/Design'));
const store = createStore(reducers, initialState);

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Design />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
