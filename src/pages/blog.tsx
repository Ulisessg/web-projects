import React from 'react';

// import ReactDom from 'react-dom';
import GlobalStyles from '../../styles/GlobalStyles';
import Loading from '../atoms/Loading';
import Layout from '../organisms/Layout';

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
// const Blog = lazy(() => import('../react/templates/Blog'));

import Blog from '../templates/Blog';

// ReactDom.render(
//   <>
//     <Suspense fallback={<Loading />}>

//     </Suspense>
//   </>,
//   document.getElementById('root'),
// );

export default function BlogPage() {
  return (

    <>
      <GlobalStyles />

      <Layout>
        <main role="main" className="wrapper">
          <Blog />
        </main>
      </Layout>
    </>
  );
}
