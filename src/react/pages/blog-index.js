//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/initialReducer';
import initialState from '../store/initialState';
import Loading from '../atoms/Loading';
//App
const Blog = lazy(() => import('../templates/Blog'));
const store = createStore(reducers, initialState);
ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Blog />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
