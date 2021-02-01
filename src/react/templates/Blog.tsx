import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as blogActions from '../actions/blogActions/index';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/organisms/mainBlog-styles.styl';
import '../../styles/templates/blog-styles.styl';

//  Components
import MainBlog from '../organisms/MainBlog';
import Layout from '../organisms/Layout';

function Blog({ getBlogs }: { getBlogs: any }): JSX.Element {
  let blogsRequested = false;

  useEffect(() => {
    getBlogs();
    blogsRequested = true;
  }, [blogsRequested]);

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

function mapStateToProps(initialState: any) {
  return { initialState };
}

export default connect(mapStateToProps, blogActions)(Blog);
