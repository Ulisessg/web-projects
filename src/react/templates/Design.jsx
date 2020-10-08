import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';
//Loading
import Loading from '../atoms/Loading';

//Default styles
import '../../styles/default-styles.styl';

const Header = lazy(() => import('../organisms/Header'));

const paths = [
  {
    id: '1',
    name: 'Inicio',
    path: '/',
  },
  {
    id: '2',
    name: 'Blog',
    path: '/blog',
  },
  {
    id: '3',
    name: 'Sistema de diseño',
    path: '/design',
  },
];

const Design = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>Design system</title>
          <meta
            name='description'
            content='Sistema de diseño utilizado para construir mis productos'
          />
          <link rel='icon' type='image/vnd.microsoft.icon' href={Icon} />
        </Helmet>
        <Header paths={paths} />
      </Suspense>
    </>
  );
};

export default Design;
