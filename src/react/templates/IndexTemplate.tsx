import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as blogActions from '../actions/blogActions/index';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/blog-styles.styl';
import '../../styles/organisms/mainBlog-styles.styl';

import Layout from '../organisms/Layout';
import IndexOrganism from '../organisms/IndexOrganism';
import Blogs from '../organisms/MainBlog';

function Main({ getBlogs }: { getBlogs: any }): JSX.Element {
  let blogsRequested = false;
  useEffect(() => {
    getBlogs();
    blogsRequested = true;
  }, [blogsRequested]);

  return (
    <>
      <Layout>
        <main className='main' id='main'>
          <h2>Proyectos</h2>
          <div className='wrapper'>
            <section className='sections'>
              <IndexOrganism />
            </section>
          </div>

          <div style={{ height: '10vh', marginTop: '10vh' }} />

          {/* <div
            style={{
              height: '10vh',
              backgroundColor: '#052336',
              width: '100vw',
              margin: '10vh 0',
            }}
          /> */}

          <h2>Ultimos posts</h2>

          <div className='wrapper'>
            <Blogs />
          </div>
        </main>
      </Layout>
    </>
  );
}

function mapStateToProps({ getBlogs }) {
  return { getBlogs };
}

export default connect(mapStateToProps, blogActions)(Main);
