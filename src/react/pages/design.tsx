import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GlobalStyles from '../../styles/GlobalStyles';
import reducers from '../reducers/design';
import Loading from '../atoms/Loading';

const Design = React.lazy(() => import('../templates/Design'));
const store = createStore(reducers, {});

ReactDom.render(
  <>
    <React.Suspense fallback={<Loading />}>
      <Provider store={store}>
        <GlobalStyles />
        <Design />
      </Provider>
    </React.Suspense>
  </>,
  window.document.getElementById('root'),
);
