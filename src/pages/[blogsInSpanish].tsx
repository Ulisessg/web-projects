/* eslint-disable array-callback-return */
/* eslint-disable react/no-danger */
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import Layout from '../organisms/Layout';
import Head from '../atoms/Head';
import BlogPostStyles from '../styles/atoms/BlogPostStyles';

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = context.params.blogsInSpanish;

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
    if (blog.language === 'es') {
      paths.push({ params: { blogsInSpanish: blog.name } });
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
        canonicalUrl={`/${data.name}`}
        description={data.metaDescription}
        image={data.seoCardUrl}
        imageAlt={`Portada de ${data.title}`}
        keywords={`${data.metaSubjects}`}
        locale="es_MX"
        title={`${data.title} | UlisesSG`}
        type="article"
      />
      <BlogPostStyles />

      <Layout>
        <main id="main">
          <section className="blog-wrapper" id="blogWraper">
            <div id="blog" dangerouslySetInnerHTML={{ __html: data.content }} />
          </section>
        </main>
      </Layout>
      <script dangerouslySetInnerHTML={{
        __html: `'use strict';

        var urlLength = window.location.pathname.split('/').length;

        var blog = window.location.pathname.split('/')[urlLength - 1];

        var raw = JSON.stringify({ blog_name: blog });

        var request = new XMLHttpRequest();

        request.open('POST', 'https://web-projects-api.vercel.app/api/blog/add-visit', true);

        request.send(raw);`,
      }}
      />
    </>
  );
}
