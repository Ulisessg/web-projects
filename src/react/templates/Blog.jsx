import React, { lazy, Suspense } from 'react';
//loading
import Loading from '../atoms/Loading';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Components
const Layout = lazy(() => import('../organisms/Layout.jsx'));
const MainBlog = lazy(() => import('../organisms/MainBlog'));

const Blog = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Layout>
          <MainBlog />
        </Layout>
      </Suspense>
    </>
  );
};

export default Blog;
