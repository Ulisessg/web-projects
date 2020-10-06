import React, { lazy, Suspense } from 'react';

import { Helmet } from 'react-helmet';

const Header = lazy(() => import('../organisms/Header'));

const paths = [
  {
    id: '1',
    name: 'Inicio',
    path: '/',
  },
  {
    id: '2',
    name: 'Principios',
    path: '/principios',
  },
  {
    id: '3',
    name: 'Sistema',
    path: '/sistema',
  },
  {
    id: '4',
    name: 'Fundamentos',
    path: '/fundamentos',
  },
  {
    id: '5',
    name: 'Componentes',
    path: '/componentes',
  },
  {
    id: '6',
    name: 'Iteración',
    path: '/iteracion',
  },
];

const Design = () => {
  return (
    <>
      <Helmet>
        <title>Design system</title>
        <meta
          name='description'
          content='Sistema de diseño utilizado para construir mis productos'
        />
      </Helmet>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header paths={paths} />
      </Suspense>
    </>
  );
};

export default Design;
