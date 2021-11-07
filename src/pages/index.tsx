import React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { IndexSections } from '../states/index';
import GetGists from '../utils/getGists';
import TransformGistsResponse from '../utils/transformGistsResponse';
import GetBlogs from '../utils/getBlogs';
import TransformBlogsInfo from '../utils/tranformBlogInfo';
import createIndexStructuredData from '../utils/createIndexStructuredData';
import { IndexNav } from '../pagesStyles/IndexStyles';
import { SectionProps } from '../types/props';

const Link = dynamic(() => import('@/atoms/Link'), { ssr: true });
const Layout = dynamic(() => import('@/organisms/Layout'), { ssr: true });
const AboutMe = dynamic(() => import('@/molecules/Description'), {
  ssr: true,
});
const Blogs = dynamic(() => import('@/templates/Blog'), { ssr: true });
const Experience = dynamic(() => import('@/templates/Experience'), {
  ssr: true,
});
const Gists = dynamic(() => import('@/templates/Gists'), {
  ssr: true,
});
const Head = dynamic(() => import('@/molecules/Head'), { ssr: true });

export default function Index({
  gistsInfo,
  blogs,
}: {
  gistsInfo: Array<SectionProps>;
  blogs: Array<SectionProps>;
}): JSX.Element {
  return (
    <>
      <Head
        canonicalUrl=''
        type='profile'
        title='Ulises Antonio | FullStack Developer | Student at Platzi Master | Nerd'
        description='Web UI Developer - Globant, tengo experiencia usando el stack MERN y Typescript, utilizo Figma para diseñar y Jira para manejar SCRUM, mi experiencia viene de proyectos personales y de Platzi Master, un bootcamp que capacita a 0.1% estudiantes de Platzi durante 3 meses en Frontend / Backend o Data Science'
        image='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan%20Web%20UI%20Developer.png?alt=media&token=4fa85fa5-d3c3-4a2e-a0bc-b2af15ef5bd6'
        imageAlt='Ulises Antonio Samano Galvan - UlisesSG'
        keywords='Full Stack Developer, Frontend Developer, Gists, MERN, Typescript, Platzi Master'
        locale='es_MX'
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: createIndexStructuredData() }}
        />
      </Head>
      <Layout>
        <main role='main'>
          <AboutMe />
          <IndexNav role='navigation'>
            <ul className='index_nav'>
              {IndexSections.map((section) => {
                return (
                  <li key={section.label}>
                    <Link
                      ariaLabel={`Ir a ${section.path}`}
                      background='backgroundLight'
                      bgh='backgroundLight2'
                      cn='a'
                      ct='textDark2'
                      cth='textDark2'
                      href={section.path}
                      linkSize='medium'
                      text={section.text}
                      noSpinner={true}
                    />
                  </li>
                );
              })}
            </ul>
          </IndexNav>
          <Experience />
          <Blogs isPageOrSection='section' blogEntries={blogs} />
          <Gists isPageOrSection='section' gists={gistsInfo} />
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
