import React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { IndexSectionsEnglish } from '../states/index';
import GetBlogs from '../utils/getBlogs';
import GetGists from '../utils/getGists';
import TransformGistsResponse from '../utils/transformGistsResponse';
import TransformBlogsInfo from '../utils/tranformBlogInfo';
import { IndexNav } from '../pagesStyles/IndexStyles';
import { SectionProps } from '@/props';

const Link = dynamic(() => import('@/atoms/Link'), { ssr: true });
const Layout = dynamic(() => import('@/organisms/Layout'), { ssr: true });
const AboutMe = dynamic(() => import('@/molecules/Description'), {
  ssr: true,
});
const Blog = dynamic(() => import('@/templates/Blog'), { ssr: true });
const ExperienceEn = dynamic(() => import('@/templates/ExperienceEn'), {
  ssr: true,
});
const Gists = dynamic(() => import('@/templates/Gists'), {
  ssr: true,
});
const Head = dynamic(() => import('@/molecules/Head'), { ssr: true });

function En({
  gistsInfo,
  blogs,
}: {
  gistsInfo: Array<SectionProps>;
  blogs: Array<SectionProps>;
}): JSX.Element {
  return (
    <>
      <Head
        canonicalUrl='/en'
        description='Web UI Developer - Globant, I have experience using MERN stack and Typescript, I use Jira and my designs are made with Figma, my experience came from personal projects and Platzi Master what is a  bootcamp that trains 0.1% Platzi students for 3 months in Frontend / Backend or Data Science skills'
        image='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan%20Web%20UI%20Developer.png?alt=media&token=4fa85fa5-d3c3-4a2e-a0bc-b2af15ef5bd6'
        title='Ulises Antonio | FullStack Developer | Student at Platzi Master | Nerd'
        imageAlt='Ulises Antonio Samano Galvan photo'
        keywords='Full Stack Developer, Frontend Developer, Gists, MERN, Typescript, Platzi Master'
        locale='en_US'
        type='profile'
      />
      <Layout>
        <main role='main'>
          <AboutMe />
          <IndexNav>
            <ul className='index_nav'>
              {IndexSectionsEnglish.map((section) => {
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
          <ExperienceEn />
          <Blog blogEntries={blogs} isPageOrSection='section' />
          <Gists gists={gistsInfo} isPageOrSection='section' />
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
