import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import Layout from '../organisms/Layout';
import Loading from '../atoms/Loading';
import { IndexSections } from '../states/index';

const AboutMe = lazy(() => import('../molecules/Description'));
const Blogs = lazy(() => import('../templates/Blog'));
const Gists = lazy(() => import('../organisms/Gists'));
const Experience = lazy(() => import('../templates/Experience'));
const PageNav = lazy(() => import('../organisms/DynamicNav'));

if (process.env.NODE_ENV !== 'development') {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

//  App

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <Layout>
        <main role="main">
          <AboutMe />
          <PageNav paths={IndexSections} />
          <Experience />
          <Blogs />
          <Gists />
        </main>
      </Layout>
    </Suspense>
  </>,
  window.document.getElementById('root'),
);
