import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../organisms/Layout';
import { IndexSections } from '../states/index';
import AboutMe from '../molecules/Description';
import Blogs from '../templates/Blog';
import Gists from '../templates/Gists';
import Experience from '../templates/Experience';
import Head from '../molecules/Head';
import GetGists from '../utils/getGists';
import TransformGistsResponse from '../utils/transformGistsResponse';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';
import GetBlogs from '../utils/getBlogs';
import TransformBlogsInfo from '../utils/tranformBlogInfo';
import createIndexStructuredData from '../utils/createIndexStructuredData';
import Link from '../atoms/Link';
import { IndexNav } from '../styles/pages/IndexStyles';

export default function Index({ gistsInfo, blogs }:
  { gistsInfo: Array<SectionProps>; blogs: Array<SectionProps>; }): JSX.Element {
  return (
    <>
      <Head
        canonicalUrl=""
        type="website"
        title="Ulises Antonio | FullStack Developer | Student at Platzi Master | Nerd"
        description="Web UI Developer - Globant, tengo experiencia usando el stack MERN y Typescript, utilizo Figma para diseñar y Jira para manejar SCRUM, mi experiencia viene de proyectos personales y de Platzi Master, un bootcamp que capacita a 0.1% estudiantes de Platzi durante 3 meses en Frontend / Backend o Data Science"
        image="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan%20Web%20UI%20Developer.png?alt=media&token=4fa85fa5-d3c3-4a2e-a0bc-b2af15ef5bd6"
        imageAlt="Ulises Antonio Samano Galvan - UlisesSG"
        keywords="Full Stack Developer, Frontend Developer, Gists, MERN, Typescript, Platzi Master"
        locale="es_MX"
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: createIndexStructuredData() }} />
      </Head>
      <Layout>
        <main role="main">
          <AboutMe />
          <IndexNav>
            <ul className="index_nav">
              {IndexSections.map((section) => {
                return (
                  <li key={section.label}>
                    <Link
                      ariaLabel={`Ir a ${section.path}`}
                      background="backgroundLight"
                      bgh="backgroundLight2"
                      cn="a"
                      ct="textDark2"
                      cth="textDark2"
                      href={section.path}
                      linkSize="medium"
                      text={section.text}
                      noSpinner={true}
                    />
                  </li>
                );
              })}
            </ul>
          </IndexNav>
          <Experience />
          <Blogs isPageOrSection="section" blogEntries={blogs} />
          <Gists isPageOrSection="section" gists={gistsInfo} />
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
