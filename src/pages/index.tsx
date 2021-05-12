import React from 'react';
// import ReactDom from 'react-dom';
import dynamic from 'next/dynamic';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../organisms/Layout';
import Loading from '../atoms/Loading';
import { IndexSections } from '../states/index';

// const AboutMe = lazy(() => import('../react/molecules/Description'));
// const Blogs = lazy(() => import('../react/templates/Blog'));
// const Gists = lazy(() => import('../react/templates/Gists'));
// const Experience = lazy(() => import('../react/templates/Experience'));
// const PageNav = lazy(() => import('../react/organisms/DynamicNav'));

import AboutMe from '../molecules/Description';
import Blogs from '../templates/Blog';
import Gists from '../templates/Gists';
import Experience from '../templates/Experience';

const PageNav = dynamic(() => import('../organisms/DynamicNav'), { ssr: false });

// if (process.env.NODE_ENV !== 'development') {
//   // Check that service workers are supported
//   if ('serviceWorker' in navigator) {
//     // Use the window load event to keep the page load performant
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/service-worker.js');
//     });
//   }
// }

//  App

export default function Index() {
  return (
    <>
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
    </>
  );
}
