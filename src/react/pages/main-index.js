//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from '../store/initialState';
import reducers from '../reducers/initialReducer';
//App
const Main = lazy(() => import('../templates/Main'));
const store = createStore(reducers, initialState);

ReactDom.render(
  <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={store}>
        <Main />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
