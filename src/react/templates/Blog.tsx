import React from 'react';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/organisms/mainBlog-styles.styl';
import '../../styles/templates/blog-styles.styl';

//  Components
import Layout from '../organisms/Layout';
import MainBlog from '../organisms/MainBlog';

function Blog(): JSX.Element {
  return (
    <>
      <Layout>
        <div className='wrapper'>
          <MainBlog />
        </div>
      </Layout>
    </>
  );
}

export default Blog;
