/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../organisms/Layout';

// if (process.env.NODE_ENV !== 'development') {
//   // Check that service workers are supported
//   if ('serviceWorker' in navigator) {
//     // Use the window load event to keep the page load performant
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/service-worker.js');
//     });
//   }
// }

import Gists from '../templates/Gists';

export default function GistsPage(): JSX.Element {
  return (
    <>

      <GlobalStyles />

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- PWA --> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#052336" />
        <link
          rel="apple-touch-icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
        />

        {/* <!-- Facebook Pixel Code --> */}
        <script>
          {`!(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
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
      fbq('track', 'PageView');`}
        </script>
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
        <link rel="canonical" href="https://ulisessg.com/gist" />
        <meta
          name="description"
          content="Aprende buenas prácticas y recomendaciones con pequeñas piezas de código, aprende sobre optimización, algoritmos, uso de APIS Frontend, funcionalidades de Python y hacks de JavaScript y React."
        />
        <meta
          name="keywords"
          content="Full stack developer, Frontend Developer, Backend Developer, Backend, Front-end, Front-End, BackEnd, Web developer, gists, python, javascript, html, css"
        />

        <meta name="author" content="Ulises Antonio Samano Galvan" />

        {/* <!-- Twitter SEO  --> */}
        <meta
          name="twitter:title"
          content="Aprende buenas prácticas y recomendaciones con pequeñas piezas de código, aprende sobre optimización, algoritmos, uso de APIS Frontend, funcionalidades de Python y hacks de JavaScript y React."
        />
        <meta
          name="twitter:description"
          content="Aprende buenas prácticas y recomendaciones con pequeñas piezas de código, aprende sobre optimización, algoritmos, uso de APIS Frontend, funcionalidades de Python y hacks de JavaScript y React."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fgists%2Fgits%20page.png?alt=media&token=50b3c3b3-3576-42d2-ace5-0abf1dd738fe"
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
          content="Aprende buenas prácticas y recomendaciones con pequeñas piezas de código, aprende sobre optimización, algoritmos, uso de APIS Frontend, funcionalidades de Python y hacks de JavaScript y React."
        />
        <meta
          property="og:description"
          content="Aprende buenas prácticas y recomendaciones con pequeñas piezas de código, aprende sobre optimización, algoritmos, uso de APIS Frontend, funcionalidades de Python y hacks de JavaScript y React."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fgists%2Fgits%20page.png?alt=media&token=50b3c3b3-3576-42d2-ace5-0abf1dd738fe"
        />
        <meta property="og:url" content="https://ulisessg.com/gist" />

        {/* <!-- SEO end  --> */}

        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
          type="image/png"
        />
        <title>
          Gists - Aprende buenas prácticas y recomendaciones con pequeñas piezas de
          código | UlisesSG FullStack Developer
        </title>
      </Head>
      <Layout>
        <main role="main">
          <Gists />
        </main>
      </Layout>
    </>

  );
}
