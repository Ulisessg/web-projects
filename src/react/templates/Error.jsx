import React, { lazy, Suspense } from 'react';
import Loading from '../atoms/Loading';
import { paths } from '../../localData.json';

import '../../styles/templates/Error.styl';

const Header = lazy(() => import('../organisms/Header'));

const Error = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
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
