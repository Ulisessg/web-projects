import React, { lazy, Suspense } from 'react';

import ReactDom from 'react-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import Loading from '../atoms/Loading';

//  App
const Blog = lazy(() => import('../templates/Blog'));

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <Blog />
    </Suspense>
  </>,
  document.getElementById('root'),
);
