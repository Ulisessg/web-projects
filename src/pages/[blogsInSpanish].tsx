/* eslint-disable array-callback-return */
/* eslint-disable react/no-danger */
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';
import BlogPostStyles from '../styles/atoms/BlogPostStyles';
import { BlogEntryRaw } from '../interfaces_and_types/globalPropsAndProperties';
import createBlogsStructuredData from '../utils/createBlogsStructuredData';
import BlogImageStyles from '../styles/atoms/BlogImageStyles';

const AddBlogVisit = dynamic(() => import('../atoms/AddBlogVisit'));
const Layout = dynamic(() => import('../organisms/Layout'), { ssr: true });
const Head = dynamic(() => import('../molecules/Head'), { ssr: true });
const ShareMedia = dynamic(() => import('../organisms/ShareMedia'), {
  ssr: true,
});
const FacebookComments = dynamic(
  () => import('../molecules/FacebookComments'),
  { ssr: true }
);
const BlogAuthorCard = dynamic(() => import('../molecules/BlogAuthorCard'), {
  ssr: true,
});
const BlogPresentation = dynamic(
  () => import('../molecules/BlogPresentation'),
  {
    ssr: true,
  }
);

export const getStaticProps: GetStaticProps = async (context: any) => {
  const blog: any = context.params.blogsInSpanish;

  const request: { data: { message: Array<BlogEntryRaw> } } = await axios.get(
    `https://web-projects-api.vercel.app/api/blog/?name=${blog}`
  );

  const data: Array<BlogEntryRaw> = request.data.message;

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request: { data: { message: Array<BlogEntryRaw> } } = await axios.get(
    'https://web-projects-api.vercel.app/api/blog/all-blogs'
  );

  const paths: any = [];

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

export default function Post({ data }: { data: BlogEntryRaw }): JSX.Element {
  const structuredData = createBlogsStructuredData(data);

  // Last update date
  let lastUpdatedBlogDate: string = '';

  if (data.lastUpdate) {
    let dateSplitted: Array<string> = data.lastUpdate?.split('-') as any;
    lastUpdatedBlogDate = new Date(
      parseInt(dateSplitted[0], 10),
      parseInt(dateSplitted[1], 10),
      parseInt(dateSplitted[2], 10)
    )
      .toJSON()
      .slice(0, 10);
  }

  return (
    <>
      <Head
        canonicalUrl={`/${data.name}`}
        description={data.metaDescription}
        image={data.seoCardUrl}
        imageAlt={`Portada de ${data.title}`}
        keywords={`${data.metaSubjects}`}
        locale='es_MX'
        title={`${data.title} | UlisesSG`}
        type='article'
      >
        <meta property='article:published_time' content={structuredData.date} />
        <meta
          name='publish_date'
          property='og:publish_date'
          content={structuredData.date}
        />
        {data.lastUpdate && (
          <meta
            property='article:modified_time'
            content={lastUpdatedBlogDate || ''}
          />
        )}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: structuredData.structuredData }}
        />
      </Head>
      <BlogPostStyles />

      <Layout>
        <main id='main'>
          <section className='blog-wrapper' id='blogWraper'>
            {/* Share and likes */}

            <div className='blog-presentation-container'>
              <BlogPresentation
                title={data.title}
                description={data.metaDescription}
              />
              <BlogImageStyles src={data.seoCardUrl} alt={data.title} />
            </div>
            <div id='blog' dangerouslySetInnerHTML={{ __html: data.content }} />
            <BlogAuthorCard
              dateTime={data.publicationDate}
              publishDate={structuredData.date}
            />
            <ShareMedia
              path={`/${data.name}`}
              addLikePath='https://web-projects-api.vercel.app/api/blog/add-like'
              documentNameForLike={
                typeof window !== 'undefined' &&
                window.location.pathname.split('/')[1]
              }
            />
            {typeof window !== 'undefined' && (
              <FacebookComments path={`https://ulisessg.com/${data.name}`} />
            )}
          </section>
        </main>
      </Layout>
      {process.env.NODE_ENV !== 'development' && <AddBlogVisit />}
    </>
  );
}
