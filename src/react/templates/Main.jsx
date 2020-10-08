import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';
import { paths } from '../../localData.json';

//Loading
import Loading from '../atoms/Loading';
//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Componenta
const Header = lazy(() => import('../organisms/Header'));

const Main = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>Ulises Dev</title>
          <meta
            name='description'
            content='Portafolio de @Ulises5G ulisessg Ulises Antonio Samano Galvan'
          />
          <link rel='icon' type='image/vnd.microsoft.icon' href={Icon} />
        </Helmet>
        <Header paths={paths} />
        <h1>
          Work in progress...
          <span role='img' aria-label='emoji'>
            😀
          </span>
        </h1>
        <br />
        <a href='/design' className='link'>
          <h1>Actualmente estoy trabajando en un sistema de diseño</h1>
        </a>
      </Suspense>
    </>
  );
};

export default Main;
