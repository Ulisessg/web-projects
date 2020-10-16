import React, { lazy, Suspense } from 'react';
import Loading from '../atoms/Loading';
import { paths } from '../../localData.json';

import '../../styles/templates/error-styles.styl';

const Header = lazy(() => import('../organisms/Header'));
const MainError = lazy(() => import('../organisms/MainError'));

const Error = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header paths={paths} />
        <MainError />
      </Suspense>
    </>
  );
};

export default Error;
