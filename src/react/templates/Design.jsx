//@ts-check
import React, { lazy, Suspense } from 'react';

//Loading
import Loading from '../atoms/Loading';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/design-styles.styl';

//Components
const Layout = lazy(() => import('../organisms/Layout'));
const Main = lazy(() => import('../organisms/MainDesign'));

const Design = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Layout>
          <div className='wrapper'>
            <Main />
          </div>
        </Layout>
      </Suspense>
    </>
  );
};

export default Design;
