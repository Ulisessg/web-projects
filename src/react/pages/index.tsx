import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import Loading from '../atoms/Loading';

const Layout = lazy(() => import('../organisms/Layout'));
// const AboutMe = lazy(() => import('../organisms/IndexOrganism'));
const AboutMe = lazy(() => import('../molecules/Description'));
const Blogs = lazy(() => import('../templates/Blog'));
const Gists = lazy(() => import('../organisms/Gists'));

if (process.env.NODE_ENV !== 'development') {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

// const IndexTemplate = lazy(() => import('../templates/IndexTemplate'));

//  App

ReactDom.render(
  <>
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <Layout>
        <main role="main">
          <AboutMe />
          <Blogs />
          <Gists />
        </main>
      </Layout>
    </Suspense>
  </>,
  window.document.getElementById('root'),
);
