//@ts-check
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Store = ({ children, initialState, reducers }) => {
  const store = createStore(reducers, initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default Store;
