//@ts-check
import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/design';
import Loading from '../atoms/Loading';

const Design = lazy(() => import('../templates/Design'));
const store = createStore(reducers, {});

ReactDom.render(
  <>
    <Helmet>
      <meta
        name='description'
        content='Sistema de diseño creado por ulises antonio'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Ulises5G' />
      <meta name='twitter:creator' content='@Ulises5G' />
      <meta name='twitter:title' content='Sistema de diseño' />
      <meta
        name='twitter:description'
        content='Sistema de diseño de @Ulises5G'
      />
      <meta
        name='twitter:image'
        content='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fme.jfif?alt=media&token=6f3e9ef4-df67-462c-bba5-0d2bea0e2076'
      />
      <meta property='og:title' content='Sistema de diseño' />
      <meta
        property='og:description'
        content='Sistema de diseño de @Ulises5G'
      />
      <meta
        property='og:image'
        content='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fme.jfif?alt=media&token=6f3e9ef4-df67-462c-bba5-0d2bea0e2076'
      />
      <meta property='og:url' content='https://ulisessg.com/design' />
      <meta property='og:site_name' content='Design system' />
      <meta property='og:locale' content='es_ES' />
      <meta property='og:type' content='article' />
    </Helmet>

    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Design />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root'),
);
