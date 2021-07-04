/* eslint-disable react/no-danger */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import axios from 'axios';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../organisms/Layout';
import BlogPostStyles from '../../styles/atoms/BlogPostStyles';
import Head from '../../atoms/Head';
import ShareMedia from '../../organisms/ShareMedia';
import AddBlogVisit from '../../atoms/AddBlogVisit';
import FacebookComments from '../../molecules/FacebookComments';

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
        <main id="main">
          <section className="blog-wrapper" id="blogWraper">
            {/* Share and likes */}
            <ShareMedia
              path={`/en/${data.name}`}
              addLikePath="https://web-projects-api.vercel.app/api/blog/add-like"
              documentNameForLike={typeof window !== 'undefined' && window.location.pathname.split('/')[2]}
            />

            <div id="blog" dangerouslySetInnerHTML={{ __html: data.content }} />

            {typeof window !== 'undefined'
              && <FacebookComments path={`https://ulisessg.com/en/${data.name}`} />}

          </section>
        </main>
      </Layout>
      {process.env.NODE_ENV !== 'development'
        && <AddBlogVisit />}

    </>
  );
}
