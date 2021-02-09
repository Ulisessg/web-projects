import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index/index';

import Loading from '../atoms/Loading';

const IndexTemplate = lazy(() => import('../templates/IndexTemplate'));

//  App
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.render(
  <>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <IndexTemplate />
      </Suspense>
    </Provider>
  </>,
  window.document.getElementById('root'),
);
