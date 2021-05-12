import React from 'react';
// import ReactDom from 'react-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../react/organisms/Layout';
import Loading from '../react/atoms/Loading';
import { IndexSections } from '../react/states/index';

// const AboutMe = lazy(() => import('../react/molecules/Description'));
// const Blogs = lazy(() => import('../react/templates/Blog'));
// const Gists = lazy(() => import('../react/templates/Gists'));
// const Experience = lazy(() => import('../react/templates/Experience'));
// const PageNav = lazy(() => import('../react/organisms/DynamicNav'));
import dynamic from 'next/dynamic';


import AboutMe from '../react/molecules/Description';
import Blogs from '../react/templates/Blog';
import Gists from '../react/templates/Gists';
import Experience from '../react/templates/Experience';


const PageNav = dynamic(() => import('../react/organisms/DynamicNav'), { ssr: false });



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
  return <>
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
  </>;

}