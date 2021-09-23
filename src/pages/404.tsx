import React from 'react';
import Styles404 from '../styles/pages/404Styles';
import ErrorTemplate from '../templates/Error';
import Layout from '../organisms/Layout';
import Head from '../molecules/Head';
import DogFrame from '../atoms/DogIFrame';

export default function Error(): JSX.Element {
  return (
    <>
      <Layout>
        <>
          <Head
            canonicalUrl="/404"
            description="Error 404"
            image="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fcovers%2F404%20page%20cover.png?alt=media&token=4419a307-e9d1-4f35-ae04-5c6dede44d9e"
            imageAlt="Error 404"
            keywords=""
            locale="es_MX"
            title="Error 404: Está página no existe o está en proceso de construcción"
            type="website"
          />
          <Styles404 id="main">
            <ErrorTemplate />

            <DogFrame />
          </Styles404>

        </>
      </Layout>
    </>
  );
}
