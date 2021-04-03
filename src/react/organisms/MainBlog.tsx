import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import getBlogs from '../utils/getBlogs';

import SectionWithImg from './SectionWithModal';

interface BlogEntry {
  metaSubjects: Array<any | string>;
  name: string;
  description: string;
  image: string;
  id: number;
  path: string;
  title: string;
}

function MainBlog(): JSX.Element {
  //  Check if request returns a error
  const [blogEntries, setBlogEntries] = useState<any>();
  const [blogStatus, setBlogStatus] = useState('loading');

  let blogsRequested: boolean = false;

  useEffect(() => {
    blogsRequested = true;
    getBlogs().then((data) => {
      setBlogEntries(JSON.parse(data));
      setBlogStatus('success');
    });
  }, [blogsRequested]);

  return (
    <>
      <main className="main" id="main">
        <h1>Ultimos posts:</h1>
        <section className="sections">
          {/* Loading blogs message */}
          {blogStatus === 'loading' && (
            <>
              <div
                style={{ width: '100vw', textAlign: 'center', margin: '20vh' }}
              >
                <h1>Loading blogs...</h1>
              </div>
            </>
          )}
          {blogStatus === 'error' && (
            <>
              <h1
                style={{
                  width: '100vw',
                  textAlign: 'center',
                  margin: '20vh',
                }}
              >
                Error getting blogs, try later 🕵️‍♀️
              </h1>
            </>
          )}
          {blogStatus === 'success' && (
            <SectionWithImg
              images={blogEntries.message}
              sections={blogEntries.message}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default MainBlog;
