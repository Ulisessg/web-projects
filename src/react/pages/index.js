//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from '../store/initialState';
import reducers from '../reducers/initialReducer';
import Loading from '../atoms/Loading';
//App
const BlogTemporal = lazy(() => import('../templates/Blog'));
const store = createStore(reducers, initialState);

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BlogTemporal />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
