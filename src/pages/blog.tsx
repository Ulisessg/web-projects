import React from 'react';
import Layout from '../organisms/Layout';
import Blog from '../templates/Blog';
import Head from '../atoms/Head';

export default function BlogPage(): JSX.Element {
  return (
    <>
      <Head
        image="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fcovers%2FBlog%20page.png?alt=media&token=38bf3f8a-fa67-454d-a52f-d2f445d2f110"
        imageAlt="UlisesSG blog cover page"
        canonicalUrl="/blog"
        keywords="JavaScript, Desarrollo web, Python, articulos de programación, articulos"
        locale="es_MX"
        type="website"
        description="Articulos de desarrollo web, JavaScript, programación, código, computer science escritos por UlisesSG"
        title="Articulos de desarrollo web, JavaScript, programación, código, computer science y más | UlisesSG FullStack Developer"
      />
      <Layout>
        <main role="main" className="wrapper">
          <Blog />
        </main>
      </Layout>
    </>
  );
}
