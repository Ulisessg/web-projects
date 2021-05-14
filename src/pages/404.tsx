/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Styles404 from '../styles/pages/404Styles';

import ErrorTemplate from '../templates/Error';
import Layout from '../organisms/Layout';

export default function Error(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <script dangerouslySetInnerHTML={{
          __html: `navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  }).catch((err) => {
    console.log('Service Worker registration failed: ', err);
  });`,
        }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `!(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
              n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          })(
            window,
            document,
            'script',
            'https://connect.facebook.net/en_US/fbevents.js',
          );
      fbq('init', '1205494516547352');
      fbq('track', 'PageView')`,
        }}
        />
        <Styles404 id="main">
          <ErrorTemplate />
        </Styles404>
      </Layout>
    </>
  );
}
