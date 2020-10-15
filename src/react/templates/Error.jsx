import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';
import Loading from '../atoms/Loading';
import { paths } from '../../localData.json';

import '../../styles/templates/error.styl';

const Header = lazy(() => import('../organisms/Header'));

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
        <h1 className='message'>
          Página no encontrada o en proceso de construcción&nbsp;
          <span role='img' aria-label='emoji'>
            👷‍♀️🚧👷‍♂️
          </span>
        </h1>
      </Suspense>
    </>
  );
};

export default Error;
