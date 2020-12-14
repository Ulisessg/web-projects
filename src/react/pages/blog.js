//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Loading from '../atoms/Loading';
import reducers from '../reducers/blog';

//App
const Blog = lazy(() => import('../templates/Blog'));
const store = createStore(reducers, {});
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
