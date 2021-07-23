/* eslint-disable array-callback-return */
/* eslint-disable react/no-danger */
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import Layout from '../organisms/Layout';
import Head from '../molecules/Head';
import BlogPostStyles from '../styles/atoms/BlogPostStyles';
import ShareMedia from '../organisms/ShareMedia';
import AddBlogVisit from '../atoms/AddBlogVisit';
import FacebookComments from '../molecules/FacebookComments';

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
    likes: number;
    publicationDate: string;
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
      >
        <meta property="article:published_time" content={data.publicationDate} />
        <meta name="publish_date" property="og:publish_date" content={data.publicationDate} />
      </Head>
      <BlogPostStyles />

      <Layout>
        <main id="main">
          <section className="blog-wrapper" id="blogWraper">
            {/* Share and likes */}
            <ShareMedia
              path={`/${data.name}`}
              addLikePath="https://web-projects-api.vercel.app/api/blog/add-like"
              documentNameForLike={typeof window !== 'undefined' && window.location.pathname.split('/')[1]}
            />
            <div id="blog" dangerouslySetInnerHTML={{ __html: data.content }} />
            {typeof window !== 'undefined'
              && <FacebookComments path={`https://ulisessg.com/${data.name}`} />}
          </section>
        </main>
      </Layout>
      {process.env.NODE_ENV !== 'development'
        && <AddBlogVisit />}

    </>
  );
}
