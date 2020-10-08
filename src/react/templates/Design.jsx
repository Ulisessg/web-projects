import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';
import { paths } from '../../localData.json';
//Loading
import Loading from '../atoms/Loading';

//Default styles
import '../../styles/default-styles.styl';

const Header = lazy(() => import('../organisms/Header'));

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
