import React from 'react';

//  Styles
import '../../styles/organisms/mainBlog-styles.styl';
import '../../styles/templates/blog-styles.styl';

//  Components
import MainBlog from '../organisms/MainBlog';
import Layout from '../organisms/Layout';

function Blog(): JSX.Element {
  return (
    <>
      <Layout>
        <main role="main" className="wrapper">
          <MainBlog />
        </main>
      </Layout>
    </>
  );
}

export default Blog;
