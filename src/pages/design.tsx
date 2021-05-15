import React from 'react';
import Head from 'next/head';
import DesignTemplate from '../templates/Design';

export default function Design(): JSX.Element {
  return (
    <>
      <Head>
        {/* <!-- PWA --> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#052336" />
        <link
          rel="apple-touch-icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sistema de diseño creado por ulises antonio samano galvan"
        />

        <meta name="author" content="UlisesSG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Ulises5G" />
        <meta name="twitter:creator" content="@Ulises5G" />
        <meta name="twitter:title" content="Sistema de diseño" />
        <meta name="twitter:description" content="Sistema de diseño de @Ulises5G" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fme.jfif?alt=media&token=6f3e9ef4-df67-462c-bba5-0d2bea0e2076"
        />
        <meta property="og:title" content="Sistema de diseño" />
        <meta property="og:description" content="Sistema de diseño de @Ulises5G" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fme.jfif?alt=media&token=6f3e9ef4-df67-462c-bba5-0d2bea0e2076"
        />
        <meta property="og:url" content="https://ulisessg.com/design" />
        <meta property="og:site_name" content="Design system" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
          type="image/png"
        />
        <title>Sistema de diseño</title>

      </Head>
      <DesignTemplate />
    </>
  );
}
