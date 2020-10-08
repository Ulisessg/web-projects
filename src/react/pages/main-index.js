import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';

//Componets
const Main = lazy(() => import('../templates/Main'));

ReactDom.render(
  <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Main />
    </Suspense>
  </>,
  document.getElementById('root'),
);
