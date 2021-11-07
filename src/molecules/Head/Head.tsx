/* eslint-disable react/no-danger */
import React, { FunctionComponent } from 'react';
import NextHead from 'next/head';

import { HeadProps } from '@/props';

const Head: FunctionComponent<HeadProps> = (props: HeadProps): JSX.Element => {
  return (
    <NextHead>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      {/* <!-- PWA --> */}
      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#052336' />
      <link
        rel='apple-touch-icon'
        href='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51'
      />

      {/* <!-- End PWA --> */}

      {/* <!-- Basic SEO  --> */}
      <link
        rel='canonical'
        href={`https://ulisessg.com${props.canonicalUrl}`}
      />
      <meta name='description' content={props.description} />
      <meta name='keywords' content={props.keywords} />
      <meta name='author' content='Ulises Antonio Samano Galvan' />
      {/* <!-- End Basic SEO  --> */}

      {/* <!-- Twitter SEO  --> */}
      <meta name='twitter:title' content={props.title} />
      <meta name='twitter:description' content={props.description} />
      <meta name='twitter:image' content={props.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Ulises5G' />
      <meta name='twitter:creator' content='@Ulises5G' />
      {/* <!-- End Twitter SEO  --> */}

      {/* <!-- OG SEO --> */}
      <meta property='og:site_name' content='UlisesDev' />
      <meta property='og:locale' content={props.locale} />
      <meta property='og:type' content={props.type} />
      <meta property='og:image:width' content='1600' />
      <meta property='og:image:height' content='800' />
      <meta property='og:image:alt' content={props.imageAlt} />
      <meta
        property='article:author'
        content='https://www.facebook.com/Ulises5G'
      />
      <meta
        property='article:publisher'
        content='https://www.facebook.com/Ulises5G'
      />
      <meta name='article:tag' content={props.keywords} />
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:image' content={props.image} />
      <meta
        property='og:url'
        content={`https://ulisessg.com${props.canonicalUrl}`}
      />

      {/* <!-- SEO end  --> */}

      <link
        rel='icon'
        href='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51'
        type='image/png'
      />
      <title>{`${props.title}`}</title>
      {props.children}
    </NextHead>
  );
};

export default Head;
