import React, { lazy, Suspense } from 'react';

//Loading
import Loading from '../atoms/Loading';
//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Componenta
const Layout = lazy(() => import('../organisms/Layout'));
const Main = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Layout>
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
        </Layout>
      </Suspense>
    </>
  );
};

export default Main;
