//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';

//State
import { design } from '../store/initialState';
import { designReducers } from '../reducers/reducers';
//App
const Provider = lazy(() => import('../atoms/Provider'));
const Design = lazy(() => import('../templates/Design'));

ReactDom.render(
  <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider reducers={designReducers} initialState={design}>
        <Design />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
