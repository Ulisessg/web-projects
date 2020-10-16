import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';
import Loading from '../atoms/Loading';
import { paths } from '../../localData.json';

import '../../styles/templates/error-styles.styl';

const Header = lazy(() => import('../organisms/Header'));
const MainError = lazy(() => import('../organisms/MainError'));

const Error = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>Error 404</title>
          <meta
            name='description'
            content='Sistema de diseño utilizado para construir mis productos'
          />
          <link rel='icon' type='image/vnd.microsoft.icon' href={Icon} />
        </Helmet>
        <Header paths={paths} />
        <MainError />
      </Suspense>
    </>
  );
};

export default Error;
