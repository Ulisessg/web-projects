//@ts-check
import React, { lazy, Suspense } from 'react';
import Loading from '../atoms/Loading';

import '../../styles/templates/error-styles.styl';

const Layout = lazy(() => import('../organisms/Layout'));
const MainError = lazy(() => import('../organisms/MainError'));

const Error = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Layout>
          <div className='wrapper'>
            <MainError />
          </div>
        </Layout>
        <MainError />
      </Suspense>
    </>
  );
};

export default Error;
