/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Head from 'next/head';
import ReactGist from 'react-gist';
import axios from 'axios';
import Layout from '../../organisms/Layout';
import { GistsClassesStyles } from '../../styles/templates/GistsPagesStyles';
import LinkDarkNoBlank from '../../atoms/LinkDarkNoBlank';

export async function getStaticProps(context) {
  const request = await axios.get(`https://web-projects-api.vercel.app/api/gist?name=${context.params.gistsTemplate}`);

  const data = request.data.message[0];

  return {
    props: {
      data,
      githubCode: data.githubLink.split('/')[4],

    },
  };
}

export async function getStaticPaths() {
  const request = await axios.get('https://web-projects-api.vercel.app/api/gist?limit=100');
  const gists = request.data.message;

  const paths = [];

  gists.map((gistt: any) => paths.push(`/gists/${gistt.name}`));

  return {
    paths,
    fallback: false,
  };
}

function GistsTemplate({ data, githubCode }: { data: any; githubCode: any; }): JSX.Element {
  return (
    <>
      <GistsClassesStyles />

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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

        {/* <!-- PWA --> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#052336" />
        <link
          rel="apple-touch-icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
        />

        {/* <!-- Facebook Pixel Code --> */}
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1205494516547352&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Facebook Pixel Code --> */}

        {/* <!-- Basic SEO  --> */}
        <link rel="canonical" href={`https://ulisessg.com/gists/${data.name}`} />
        <meta
          name="description"
          content={data.description}
        />
        <meta
          name="keywords"
          content={data.subjects}
        />

        <meta name="author" content="Ulises Antonio Samano Galvan" />

        {/* <!-- Twitter SEO  --> */}
        <meta
          name="twitter:title"
          content={data.title}
        />
        <meta
          name="twitter:description"
          content={data.description}
        />
        <meta
          name="twitter:image"
          content={data.image}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Ulises5G" />
        <meta name="twitter:creator" content="@Ulises5G" />

        {/* <!-- OG SEO --> */}
        <meta property="og:site_name" content="UlisesDev" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={data.title}
        />
        <meta
          property="og:description"
          content={data.description}
        />
        <meta
          property="og:image"
          content={data.image}
        />
        <meta property="og:url" content={`https://ulisessg.com/gists/${data.name}`} />

        {/* <!-- SEO end  --> */}

        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
          type="image/png"
        />
        <title>
          {`${data.title} | UlisesSG FullStack Developer`}
        </title>
      </Head>
      <Layout>
        <main>
          <h1>{data.title}</h1>

          <section>
            <p>
              {data.description}
            </p>
          </section>
          <h2>Codigo</h2>
          <section id="code">
            <ReactGist id={githubCode} file={null} />
          </section>
          <LinkDarkNoBlank path="/gist" text="Ver más códigos" label="Ver más códigos" />

        </main>
      </Layout>
    </>
  );
}

export default GistsTemplate;
