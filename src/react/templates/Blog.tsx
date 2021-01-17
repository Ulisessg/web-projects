import React from 'react';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Components
import Layout from '../organisms/Layout';
import MainBlog from '../organisms/MainBlog';

const Blog = () => {
  return (
    <>
      <Layout>
        <MainBlog />
      </Layout>
    </>
  );
};

export default Blog;
