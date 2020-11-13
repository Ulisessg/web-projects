import React, { lazy, Suspense } from 'react';
import Loading from '../atoms/Loading';

import '../../styles/templates/error-styles.styl';

const Header = lazy(() => import('../organisms/Header'));
const MainError = lazy(() => import('../organisms/MainError'));
const Footer = lazy(() => import('../atoms/Footer'));

const Error = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <MainError />
        <Footer />
      </Suspense>
    </>
  );
};

export default Error;
