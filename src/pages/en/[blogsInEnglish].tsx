/* eslint-disable react/no-danger */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import axios from "axios";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../organisms/Layout";
import BlogPostStyles from "../../styles/atoms/BlogPostStyles";
import Head from "../../molecules/Head";
import ShareMedia from "../../organisms/ShareMedia";
import FacebookComments from "../../molecules/FacebookComments";
import { BlogEntryRaw } from "../../interfaces_and_types/globalPropsAndProperties";
import createBlogsStructuredData from "../../utils/createBlogsStructuredData";
import BlogImageStyles from "../../styles/atoms/BlogImageStyles";
import BlogAuthorCard from "../../molecules/BlogAuthorCard";
import BlogPresentation from "../../molecules/BlogPresentation";
import dynamic from "next/dynamic";

const AddBlogVisit = dynamic(() => import("../../atoms/AddBlogVisit"));

export const getStaticProps: GetStaticProps = async (context: any) => {
  const blog: any = context.params.blogsInEnglish;

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
    "https://web-projects-api.vercel.app/api/blog/all-blogs"
  );

  const paths: any = [];

  request.data.message.filter((blog: BlogEntryRaw) => {
    if (blog.language === "en") {
      paths.push({ params: { blogsInEnglish: blog.name } });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export default function Post({ data }: { data: BlogEntryRaw }): JSX.Element {
  const structuredData = createBlogsStructuredData(data);
  const dateSplitted: Array<string> = data.publicationDate?.split(
    "-"
  ) as unknown as any;
  const blogDate: Date = new Date(
    parseInt(dateSplitted[0], 10),
    parseInt(dateSplitted[1], 10),
    parseInt(dateSplitted[2], 10)
  );
  return (
    <>
      <Head
        canonicalUrl={`/en/${data.name}`}
        description={data.metaDescription}
        image={data.seoCardUrl}
        imageAlt={`${data.title}, portada`}
        keywords={`${data.metaSubjects}`}
        locale="en_US"
        title={`${data.title} | UlisesSG`}
        type="article"
      >
        <meta
          property="article:published_time"
          content={data.publicationDate}
        />
        <meta
          name="publish_date"
          property="og:publish_date"
          content={data.publicationDate}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData.structuredData }}
        />
      </Head>

      <BlogPostStyles />
      <Layout>
        <main id="main">
          <section className="blog-wrapper" id="blogWraper">
            {/* Share and likes */}
            <ShareMedia
              path={`/en/${data.name}`}
              addLikePath="https://web-projects-api.vercel.app/api/blog/add-like"
              documentNameForLike={
                typeof window !== "undefined" &&
                window.location.pathname.split("/")[2]
              }
            />
            <div>
              <BlogPresentation
                title={data.title}
                description={data.metaDescription}
              />
              <BlogImageStyles src={data.seoCardUrl} alt={data.title} />
            </div>
            <div id="blog" dangerouslySetInnerHTML={{ __html: data.content }} />
            <BlogAuthorCard publishDate={structuredData.date} />
            {typeof window !== "undefined" && (
              <FacebookComments path={`https://ulisessg.com/en/${data.name}`} />
            )}
          </section>
        </main>
      </Layout>
      {process.env.NODE_ENV !== "development" && <AddBlogVisit />}
    </>
  );
}
