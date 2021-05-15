/* eslint-disable react/no-danger */
import React from 'react';
import Styles404 from '../styles/pages/404Styles';
import ErrorTemplate from '../templates/Error';
import Layout from '../organisms/Layout';
import FacebookPixelCode from '../utils/facebookPixel';

export default function Error(): JSX.Element {
  return (
    <>
      <Layout>

        <script dangerouslySetInnerHTML={{
          __html: FacebookPixelCode,
        }}
        />
        <Styles404 id="main">
          <ErrorTemplate />
        </Styles404>
      </Layout>
    </>
  );
}
