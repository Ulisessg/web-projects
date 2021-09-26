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
import { BlogEntryRaw } from '../interfaces_and_types/globalPropsAndProperties';
import createBlogsStructuredData from '../utils/createBlogsStructuredData';
import BlogImageStyles from '../styles/atoms/BlogImageStyles';
import BlogAuthorCard from '../molecules/BlogAuthorCard';
import BlogPresentation from '../molecules/BlogPresentation';

export const getStaticProps: GetStaticProps = async (context) => {
  const blog = context.params.blogsInSpanish;

  const request: { data: { message: Array<BlogEntryRaw>; }; } = await axios.get(`https://web-projects-api.vercel.app/api/blog/?name=${blog}`);

  const data: Array<BlogEntryRaw> = request.data.message;

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request: { data: { message: Array<BlogEntryRaw>; }; } = await axios.get('https://web-projects-api.vercel.app/api/blog/all-blogs');

  const paths = [];

  request.data.message.filter((blog: BlogEntryRaw) => {
    if (blog.language === 'es') {
      paths.push({ params: { blogsInSpanish: blog.name } });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export default function Post({ data }: { data: BlogEntryRaw; }): JSX.Element {
  const structuredData = createBlogsStructuredData(data);
  const dateSplitted: Array<string> = data.publicationDate?.split('-');
  const blogDate: Date = new Date(
    parseInt(dateSplitted[0], 10),
    parseInt(dateSplitted[1], 10),
    parseInt(dateSplitted[2], 10),
  );

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
        <meta property="article:published_time" content={structuredData.date} />
        <meta name="publish_date" property="og:publish_date" content={structuredData.date} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData.structuredData }} />

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
            <div>
              <BlogPresentation title={data.title} description={data.metaDescription} />
              <BlogImageStyles src={data.seoCardUrl} alt={data.title} />
            </div>
            <div id="blog" dangerouslySetInnerHTML={{ __html: data.content }} />
            <BlogAuthorCard publishDate={structuredData.date} />
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
