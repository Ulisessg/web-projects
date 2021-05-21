import React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import Layout from '../organisms/Layout';
import { IndexSections } from '../states/index';
import AboutMe from '../molecules/Description';
import Blogs from '../templates/Blog';
import Gists from '../templates/Gists';
import Experience from '../templates/Experience';
import Head from '../atoms/Head';
import GetGists from '../utils/getGists';
import TransformGistsResponse from '../utils/transformGistsResponse';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';
import GetBlogs from '../utils/getBlogs';
import TransformBlogsInfo from '../utils/tranformBlogInfo';

/**
 *  English description:
 *  I'm a FullStack Frontend Developer with experience using MERN stack and Typescript,
 *  I use Jira and my * designs are made with Figma,
 *  my experience came from personal projects and Platzi Master
 *  what is a  bootcamp that trains 0.1%
 *  Platzi students for 3 months in Frontend / Backend or Data Science skills
 *
 */

const PageNav = dynamic(() => import('../organisms/DynamicNav'), { ssr: false });

export default function Index({ gistsInfo, blogs }:
  { gistsInfo: Array<SectionProps>; blogs: Array<SectionProps>; }): JSX.Element {
  return (
    <>
      <Head
        canonicalUrl=""
        type="website"
        title="Ulises Antonio | FullStack Developer | Student at Platzi Master | Nerd"
        description="Soy un FullStack Frontend Developer con experiencia usando el stack MERN y Typescript, utilizo Figma para diseñar y Jira para manejar SCRUM, mi experiencia viene de proyectos personales y de Platzi Master, un bootcamp que capacita a 0.1% estudiantes de Platzi durante 3 meses en Frontend / Backend o Data Science"
        image="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan%20Full%20Stack%20Developer.png?alt=media&token=27ce101b-0901-4f75-917d-46276a3f0d89"
        imageAlt="Ulises Antonio Samano Galvan photo"
        keywords="Full Stack Developer, Frontend Developer, Gists, MERN, Typescript, Platzi Master"
        locale="es_MX"
      />
      <Layout>
        <main role="main">
          <AboutMe />
          <PageNav paths={IndexSections} />
          <Experience />
          <Blogs isPageOrSection="section" blogEntries={blogs} />
          <Gists gists={gistsInfo} />
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const gists = await GetGists();
  const gistsInfo = TransformGistsResponse(gists.data);
  const blogs = await GetBlogs();
  const blogsInfo = TransformBlogsInfo(blogs.data);

  return {
    props: { gistsInfo, blogs: blogsInfo },

  };
};
