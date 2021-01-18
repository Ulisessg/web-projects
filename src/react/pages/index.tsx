import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/index/index';
import Loading from '../atoms/Loading';

//  App
const BlogTemporal = React.lazy(() => import('../templates/Blog'));
const store = createStore(reducers, {});

ReactDom.render(
  <>
    <React.Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BlogTemporal />
      </Provider>
    </React.Suspense>
  </>,
  window.document.getElementById('root'),
);
