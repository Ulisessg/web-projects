import React, { lazy, Suspense } from 'react';
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
        <Header paths={paths} />
        <MainBlog />
      </Suspense>
    </>
  );
};

export default Blog;
