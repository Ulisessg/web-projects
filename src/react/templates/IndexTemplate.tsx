import React, { lazy, Suspense } from 'react';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/blog-styles.styl';
import '../../styles/organisms/mainBlog-styles.styl';

//  Components
import Loading from '../atoms/Loading';

const Layout = lazy(() => import('../organisms/Layout'));
const IndexOrganism = lazy(() => import('../organisms/IndexOrganism'));
const Blogs = lazy(() => import('../organisms/MainBlog'));

function Main(): JSX.Element {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Layout>
          {/* Move styles in a file */}
          <main style={{ marginTop: '0' }} className="main" id="main">
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

            <section className="wrapper" id="posts">
              <Blogs />
            </section>
          </main>
        </Layout>
      </Suspense>
    </>
  );
}

export default Main;
