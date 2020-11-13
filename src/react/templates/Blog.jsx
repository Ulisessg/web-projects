import React, { lazy, Suspense } from 'react';
//loading
import Loading from '../atoms/Loading';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Components
const Header = lazy(() => import('../organisms/Header'));
const MainBlog = lazy(() => import('../organisms/MainBlog'));
const Footer = lazy(() => import('../atoms/Footer'));

const Blog = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <MainBlog />
        <Footer />
      </Suspense>
    </>
  );
};

export default Blog;
