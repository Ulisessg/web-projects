import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';
import { paths } from '../../localData.json';
//Loading
import Loading from '../atoms/Loading';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/Design.styl';

//Components
const Header = lazy(() => import('../organisms/Header'));
const Main = lazy(() => import('../organisms/MainDesign'));

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

        {/* Template */}
        <Header paths={paths} />

        {/* Content */}
        <div className='wrapper'>
          <Main />
        </div>
      </Suspense>
    </>
  );
};

export default Design;
