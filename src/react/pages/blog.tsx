import React, { lazy, Suspense /* useState, useEffect */ } from 'react';

import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/blog';
import Loading from '../atoms/Loading';

//  App
const Blog = lazy(() => import('../templates/Blog'));
const store = createStore(reducers, {}, applyMiddleware(thunk));

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
