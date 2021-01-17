import React, { lazy, Suspense /* useState, useEffect */ } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
/*  import { Helmet } from 'react-helmet'; */

import 'regenerator-runtime';

import { Provider } from 'react-redux';
import reducers from '../reducers/blog';
import Loading from '../atoms/Loading';

//  App
const Blog = lazy(() => import('../templates/Blog'));
const store = createStore(reducers, {});

// eslint-disable-next-line no-lone-blocks
{
  /*

  const SEO = () => {
  const query = window.location.search.split('=')[1];
  const urlBlogInfo = `https://web-projects-api.ulisessg.vercel.app/api/blog/info?name=${query}`;
  const [blogInfo, setBlogInfo] = useState(null);
  let infoRequested = false;

  useEffect(() => {
    window
      .fetch(urlBlogInfo)
      .then((res) => {
        infoRequested = true;
        return res.json();
      })
      .then((data) => {
        setBlogInfo(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [infoRequested]);

  return (
    <>
      {blogInfo && (
        <Helmet>
          <meta name='description' content={blogInfo.message.metaDescription} />
          <meta name='twitter:title' content={blogInfo.message.title} />
          <meta
            name='twitter:description'
            content={blogInfo.message.metaDescription}
          />
          <meta name='twitter:image' content={blogInfo.message.seoCardUrl} />
          <meta property='og:title' content={blogInfo.message.title} />
          <meta
            property='og:description'
            content={blogInfo.message.metaDescription}
          />
          <meta property='og:image' content={blogInfo.message.seoCardUrl} />
          <meta
            property='og:url'
            content={`https://ulisessg.com/blog${window.location.search}`}
          />
          <title>{blogInfo.message.title}</title>
        </Helmet>
      )}
    </>
  );
};

*/
}

ReactDom.render(
  <>
    {/* <SEO />  Temporally disabled */}
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Blog />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
