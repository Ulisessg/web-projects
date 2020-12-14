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
      <meta name='description' content='Ulises SG desing system' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Ulises5G' />
      <meta name='twitter:creator' content='@Ulises5G' />
      <meta name='twitter:title' content='Sistema de diseño' />
      <meta name='twitter:description' content='Sistema de diseño @Ulises5G' />
      <meta
        name='twitter:image'
        content='https://i.postimg.cc/brMtByVW/Logo.png'
      />
      <meta property='og:title' content='Sistema de diseño' />
      <meta property='og:description' content='Sistema de diseño @Ulises5G' />
      <meta
        property='og:image'
        content='https://i.postimg.cc/brMtByVW/Logo.png'
      />
      <meta property='og:url' content='ulisessg.com/design' />
      <meta property='og:site_name' content='Design system' />
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
