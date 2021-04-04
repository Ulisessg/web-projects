import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import Loading from '../atoms/Loading';

import '../../styles/default-styles.styl';

const Error = lazy(() => import('../templates/Error'));

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <Error />
    </Suspense>
  </>,
  window.document.getElementById('root'),
);
