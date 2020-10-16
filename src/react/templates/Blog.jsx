import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';
import { paths } from '../../localData.json';
//loading
import Loading from '../atoms/Loading';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Components
const Header = lazy(() => import('../organisms/Header'));
const MainBlog = lazy(() => import('../organisms/MainBlog'));

const Blog = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <link rel='icon' type='image/vnd.microsoft.icon' href={Icon} />
          <meta name='description' content='Noticias de tecnologia' />
        </Helmet>
        <Header paths={paths} />
        <MainBlog />
      </Suspense>
    </>
  );
};

export default Blog;
