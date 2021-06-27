/* eslint-disable react/no-danger */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import axios from 'axios';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Layout from '../../organisms/Layout';
import BlogPostStyles from '../../styles/atoms/BlogPostStyles';
import Head from '../../atoms/Head';

const Heart = dynamic(() => import('../../atoms/Heart'), { ssr: false });

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = context.params.blogsInEnglish;

  const request = await axios.get(`https://web-projects-api.vercel.app/api/blog/?name=${blog}`);

  const data = request.data.message;

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request: any = await axios.get('https://web-projects-api.vercel.app/api/blog/all-blogs');

  const paths = [];

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
    if (blog.language === 'en') {
      paths.push({ params: { blogsInEnglish: blog.name } });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export default function Post({ data }: { data: any; }): JSX.Element {
  return (
    <>
      <Head
        canonicalUrl={`/en/${data.name}`}
        description={data.metaDescription}
        image={data.seoCardUrl}
        imageAlt={`${data.title}, portada`}
        keywords={data.metaSubjects}
        locale="en_US"
        title={`${data.title} | UlisesSG`}
        type="article"
      />

      <BlogPostStyles />
      <Layout>
        {/* Facebook share script */}
        <div id="fb-root" />
        <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v11.0" nonce="PBBx30mF" />
        {/* Close Facebook share script */}

        <main id="main">
          <section className="blog-wrapper" id="blogWraper">

            {/* Share and likes */}
            <section style={{ marginTop: '15px' }}>
              <Heart name={typeof window !== 'undefined' && window.location.pathname.split('/')[1]} url="https://web-projects-api.vercel.app/api/blog/add-like" />
              {/* Facebook share div */}
              <div className="fb-share-button" data-href={`https://ulisessg.com/en/${data.name}`} data-layout="box_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Compartir</a></div>
            </section>

            <div id="blog" dangerouslySetInnerHTML={{ __html: data.content }} />
          </section>
        </main>
      </Layout>
      {/* <script dangerouslySetInnerHTML={{
        __html: `'use strict';

        var urlLength = window.location.pathname.split('/').length;

        var blog = window.location.pathname.split('/')[urlLength - 1];

        var raw = JSON.stringify({ blog_name: blog });

        var request = new XMLHttpRequest();

        request.open('POST', 'https://web-projects-api.vercel.app/api/blog/add-visit', true);

        request.send(raw);`,
      }}
      /> */}

    </>
  );
}
