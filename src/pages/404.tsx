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
        <Styles404 id="main">
          <ErrorTemplate />
        </Styles404>
      </Layout>
    </>
  );
}
