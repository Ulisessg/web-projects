/* eslint-disable react/no-danger */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import axios from 'axios';
import React from 'react';
import Layout from '../../organisms/Layout';
import BlogPostStyles from '../../styles/atoms/BlogPostStyles';
import Head from '../../atoms/Head';

export async function getStaticProps(context) {
  const blog = context.params.blogsInEnglish;

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
}

export default function Post({ data }: { data: any; }) {
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
