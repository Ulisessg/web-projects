import React, { lazy, Suspense } from 'react';
import { paths } from '../../localData.json';

//Loading
import Loading from '../atoms/Loading';
//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Componenta
const Header = lazy(() => import('../organisms/Header'));
const Footer = lazy(() => import('../atoms/Footer'));
const Main = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header paths={paths} />
        <main>
          <h1>
            Work in progress...
            <span role='img' aria-label='emoji'>
              😄
            </span>
          </h1>
          <br />
          <a href='design-system.html' className='link'>
            <h1>Actualmente estoy trabajando en un sistema de diseño</h1>
          </a>
        </main>
        <Footer />
      </Suspense>
    </>
  );
};

export default Main;
