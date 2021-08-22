import React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import Head from '../molecules/Head';
import Layout from '../organisms/Layout';
import AboutMe from '../molecules/Description';
import { IndexSectionsEnglish } from '../states/index';
import ExperienceEn from '../templates/ExperienceEn';
import Blog from '../templates/Blog';
import Gists from '../templates/Gists';
import GetBlogs from '../utils/getBlogs';
import GetGists from '../utils/getGists';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';
import TransformGistsResponse from '../utils/transformGistsResponse';
import TransformBlogsInfo from '../utils/tranformBlogInfo';

const PageNav = dynamic(() => import('../organisms/DynamicNav'), { ssr: false });

function En({ gistsInfo, blogs }:
  { gistsInfo: Array<SectionProps>; blogs: Array<SectionProps>; }): JSX.Element {
  return (
    <>
      <Head
        canonicalUrl="/en"
        description="Web UI Developer - Globant, I have experience using MERN stack and Typescript, I use Jira and my designs are made with Figma, my experience came from personal projects and Platzi Master what is a  bootcamp that trains 0.1% Platzi students for 3 months in Frontend / Backend or Data Science skills"
        image="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fcovers%2FUlises%20Antonio%20Samano%20Galvan%20Full%20Stack%20Developer.png?alt=media&token=dcbeb020-7d93-4502-ac7f-e5fd0fb2e298"
        title="Ulises Antonio | FullStack Developer | Student at Platzi Master | Nerd"
        imageAlt="Ulises Antonio Samano Galvan photo"
        keywords="Full Stack Developer, Frontend Developer, Gists, MERN, Typescript, Platzi Master"
        locale="en_US"
        type="website"
      />
      <Layout>
        <main role="main">
          <AboutMe />
          <PageNav paths={IndexSectionsEnglish} />
          <ExperienceEn />
          <Blog blogEntries={blogs} isPageOrSection="section" />
          <Gists gists={gistsInfo} isPageOrSection="section" />
        </main>
      </Layout>
    </>
  );
}

export default En;

export const getStaticProps: GetStaticProps = async () => {
  const gists = await GetGists();
  const gistsInfo = TransformGistsResponse(gists.data);
  const blogs = await GetBlogs();
  const blogsInfo = TransformBlogsInfo(blogs.data);

  return {
    props: { gistsInfo, blogs: blogsInfo },

  };
};
