/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React from 'react';
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../organisms/Layout';
import BlogPostStyles from '../styles/atoms/BlogPostStyles';

export async function getStaticProps(context) {
  const blog = context.params.blogsInSpanish;

  const request = await axios.get(`https://web-projects-api.vercel.app/api/blog/?name=${blog}`);

  const data = request.data.message;

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const request: any = await axios.get('https://web-projects-api.vercel.app/api/blog/all-blogs');

  const paths = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request.data.message.filter((blog: {
    metaSubjects: Array<any | string>;
    name: string;
    description: string;
    image: string;
    id: number;
    path: string;
    title: string;
    language?: 'en' | 'es';
  }) => {
    if (blog.language === 'es') {
      paths.push({ params: { blogsInSpanish: blog.name } });
    }
  });

  // { params: { blogsInSpanish: blog.name } }

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ data }: { data: any; }) {
  return (
    <>
      <GlobalStyles />
      <BlogPostStyles />
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

        {/* <!-- Facebook comments plugin --> */}

        <div id="fb-root" />
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v10.0" nonce="h8ZjI4Zv" />

        {/* <!-- End Facebook comments plugin --> */}

        {/* <!-- Facebook Pixel Code --> */}
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
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
        <link rel="canonical" href={`https://ulisessg.com/${data.name}`} />
        <meta name="description" content={`${data.metaDescription}`} />
        <meta name="keywords" content={`${data.metaSubjects}`} />
        <meta name="author" content="Ulises Antonio Samano Galvan" />

        {/* <!-- Twitter SEO  --> */}
        <meta name="twitter:title" content={`${data.title}`} />
        <meta name="twitter:description" content={`${data.metaDescription}`} />
        <meta name="twitter:image" content={`${data.seoCardUrl}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Ulises5G" />
        <meta name="twitter:creator" content="@Ulises5G" />
        <meta property="twitter:url" content={`https://ulisessg.com/${data.name}`} />

        {/* <!-- OG SEO --> */}
        <meta property="og:site_name" content="UlisesDev" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${data.title}`} />
        <meta property="og:description" content={`${data.metaDescription}`} />
        <meta property="og:image" content={`${data.seoCardUrl}`} />
        <meta property="og:url" content={`https://ulisessg.com/${data.name}`} />

        {/* <!-- SEO end  --> */}

        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
          type="image/png"
        />

        <title>
          {`${data.title} | UlisesSG`}
        </title>
      </Head>

      <Layout>
        <main id="main">
          <section className="blog-wrapper" id="blogWraper">
            <div id="blog" dangerouslySetInnerHTML={{ __html: data.content }} />
          </section>
        </main>
      </Layout>
    </>
  );
}