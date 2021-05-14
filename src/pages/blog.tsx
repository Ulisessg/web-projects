/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../organisms/Layout';
import Blog from '../templates/Blog';

// if (process.env.NODE_ENV !== 'development') {
//   // Check that service workers are supported
//   if ('serviceWorker' in navigator) {
//     // Use the window load event to keep the page load performant
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/service-worker.js');
//     });
//   }
// }

export default function BlogPage(): JSX.Element {
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
        <link rel="canonical" href="https://ulisessg.com/blog" />
        <meta
          name="description"
          content="Articulos de desarrollo web, JavaScript, programación, código, computer science y más | UlisesSG FullStack Developer"
        />
        <meta
          name="keywords"
          content="html,JavaScript,programación, desarrollo web,
    código"
        />

        <meta name="author" content="Ulises Antonio Samano Galvan" />

        {/* <!-- Twitter SEO  --> */}
        <meta
          name="twitter:title"
          content="Articulos de desarrollo web, JavaScript, programación, código y más | UlisesSG FullStack Developer"
        />
        <meta
          name="twitter:description"
          content="Articulos de desarrollo web, JavaScript, programación, código, computer science y más | UlisesSG FullStack Developer"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fulises5G.jfif?alt=media&token=bbe0eb8b-ee31-4ef1-a444-452691ca8f67"
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
          content="Articulos de desarrollo web, JavaScript, programación, código y más | UlisesSG FullStack Developer"
        />
        <meta
          property="og:description"
          content="Articulos de desarrollo web, JavaScript, programación, código, computer science y más | UlisesSG FullStack Developer"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fulises5G.jfif?alt=media&token=bbe0eb8b-ee31-4ef1-a444-452691ca8f67"
        />
        <meta property="og:url" content="https://ulisessg.com/blog" />

        {/* <!-- SEO end  --> */}

        <link
          rel="icon"
          type="image/png"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
        />

        <title>
          Articulos de desarrollo web, JavaScript, programación, código y más |
          UlisesSG FullStack Developer
        </title>
      </Head>
      <Layout>
        <main role="main" className="wrapper">
          <Blog />
        </main>
      </Layout>
    </>
  );
}