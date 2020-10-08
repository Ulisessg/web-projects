import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import icon from '../../../public/favicon.ico';

const Header = lazy(() => import('../organisms/Header'));

const paths = [
  {
    id: '1',
    name: 'Inicio',
    path: '/',
  },
  {
    id: '2',
    name: 'Sistema de diseño',
    path: '/design',
  },
  {
    id: '3',
    name: 'Blog',
    path: '/blog',
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
        <link rel='icon' type='image/vnd.microsoft.icon' href={icon} />
      </Helmet>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header paths={paths} />
      </Suspense>
    </>
  );
};

export default Design;
