import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import * as blogActions from '../actions/blogActions/index';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/blog-styles.styl';
import '../../styles/organisms/mainBlog-styles.styl';

//  Components
import Loading from '../atoms/Loading';

const Layout = lazy(() => import('../organisms/Layout'));
const IndexOrganism = lazy(() => import('../organisms/IndexOrganism'));
const Blogs = lazy(() => import('../organisms/MainBlog'));

function Main({ getBlogs }: { getBlogs: any }): JSX.Element {
  let blogsRequested = false;
  useEffect(() => {
    getBlogs();
    blogsRequested = true;
  }, [blogsRequested]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Layout>
          {/* Move styles in a file */}
          <main style={{ marginTop: '0' }} className='main' id='main'>
            <IndexOrganism />

            <div style={{ height: '10vh', marginTop: '10vh' }} />

            {/* <div
            style={{
              height: '10vh',
              backgroundColor: '#052336',
              width: '100vw',
              margin: '10vh 0',
            }}
          /> */}

            <section className='wrapper' id='posts'>
              <Blogs />
            </section>
          </main>
        </Layout>
      </Suspense>
    </>
  );
}

function mapStateToProps({ getBlogs }) {
  return { getBlogs };
}

export default connect(mapStateToProps, blogActions)(Main);
