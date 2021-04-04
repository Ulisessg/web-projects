import React, { lazy, Suspense } from 'react';

import ReactDom from 'react-dom';
import Loading from '../atoms/Loading';

//  App
const Blog = lazy(() => import('../templates/Blog'));

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <Blog />
    </Suspense>
  </>,
  document.getElementById('root'),
);
