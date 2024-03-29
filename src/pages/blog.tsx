import React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import GetBlog from '../utils/getBlogs';
import tranformBlogInfo from '../utils/tranformBlogInfo';
import { SectionProps } from '@/props';

const Layout = dynamic(() => import('../organisms/Layout'), { ssr: true });
const Blog = dynamic(() => import('../templates/Blog'), { ssr: true });
const Head = dynamic(() => import('../molecules/Head'), { ssr: true });

export default function BlogPage({
  blogs,
}: {
  blogs: Array<SectionProps>;
}): JSX.Element {
  return (
    <>
      <Head
        image='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fcovers%2FBlog%20page.png?alt=media&token=38bf3f8a-fa67-454d-a52f-d2f445d2f110'
        imageAlt='UlisesSG blog cover page'
        canonicalUrl='/blog'
        keywords='JavaScript, Desarrollo web, Python, articulos de programación, articulos'
        locale='es_MX'
        type='website'
        description='Articulos de desarrollo web, JavaScript, programación, código, computer science escritos por UlisesSG'
        title='Articulos de desarrollo web, JavaScript, programación, código, computer science y más | UlisesSG FullStack Developer'
      />
      <Layout>
        <main role='main' className='wrapper'>
          <Blog isPageOrSection='page' blogEntries={blogs} />
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await GetBlog();
  const blogsInfo = tranformBlogInfo(blogs.data);

  return {
    props: { blogs: blogsInfo },
  };
};
