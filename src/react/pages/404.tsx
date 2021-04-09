import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import Loading from '../atoms/Loading';
import GlobalStyles from '../../styles/GlobalStyles';

const Error = lazy(() => import('../templates/Error'));

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <Error />
    </Suspense>
  </>,
  window.document.getElementById('root'),
);
