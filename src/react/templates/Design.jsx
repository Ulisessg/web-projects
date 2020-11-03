import React, { lazy, Suspense } from 'react';
import paths from '../../localData.json';
//Loading
import Loading from '../atoms/Loading';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/design-styles.styl';

//Components
const Header = lazy(() => import('../organisms/Header'));
const Main = lazy(() => import('../organisms/MainDesign'));
const Footer = lazy(() => import('../atoms/Footer'));
const Design = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header paths={paths.paths} />
        <div className='wrapper'>
          <Main />
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default Design;
