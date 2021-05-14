import React, { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Styles404 from '../styles/pages/404Styles';

import ErrorTemplate from '../templates/Error';
import Layout from '../organisms/Layout';

export default function Error(): JSX.Element {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          (err) => {
            console.log('Service Worker registration failed: ', err);
          },
        );
      });
    }
  }, []);
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Styles404 id="main">
          <ErrorTemplate />
        </Styles404>
      </Layout>
    </>
  );
}
