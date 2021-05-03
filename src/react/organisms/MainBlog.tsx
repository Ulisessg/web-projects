import React, { useEffect, useState } from 'react';
import getBlogs from '../utils/getBlogs';
import LoadingSpinner from '../atoms/Loading';
import SectionNoModal from '../templates/SectionNoModal';
import transformBlogInfo from '../utils/tranformBlogInfo';

function MainBlog(): JSX.Element {
  //  Check if request returns a error
  const [blogEntries, setBlogEntries] = useState<any>();
  const [blogStatus, setBlogStatus] = useState<string>('loading');

  let blogsRequested = false;

  useEffect(() => {
    blogsRequested = true;
    getBlogs()
      .then((data) => {
        const infoTransformed = transformBlogInfo(data);
        setBlogEntries(infoTransformed);
        setBlogStatus('success');
      })
      .catch(() => {
        setBlogStatus('error');
      });
  }, [blogsRequested]);

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
          Ultimos posts:
        </h1>
        <div id="posts">
          <section className="sections">
            {/* Loading blogs message */}
            {blogStatus === 'loading' && (
              <>
                <LoadingSpinner />
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
              <SectionNoModal images={blogEntries} sections={blogEntries} />
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default MainBlog;
