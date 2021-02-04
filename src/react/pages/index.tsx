import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index/index';
import IndexTemplate from '../templates/IndexTemplate';

//  App
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.render(
  <>
    <Provider store={store}>
      <IndexTemplate />
    </Provider>
  </>,
  window.document.getElementById('root'),
);
