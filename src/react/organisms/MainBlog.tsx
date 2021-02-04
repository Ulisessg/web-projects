import React from 'react';
import { connect } from 'react-redux';

import SectionWithImg from '../atoms/SectionWithImg';

interface BlogEntry {
  metaSubjects: Array<any | string>;
  name: string;
  description: string;
  image: string;
  id: number;
  path: string;
  title: string;
}

function MainBlog({ blogs }: { blogs: Array<BlogEntry | any> }): JSX.Element {
  //  Check if request returns a error

  let areError;
  if (blogs.length > 0 && blogs[0].error === true) {
    areError = true;
  } else {
    areError = false;
  }

  return (
    <>
      <main className='main' id='main'>
        <section className='sections'>
          {/* Loading blogs message */}
          {blogs.length === 0 && (
            <>
              <div
                style={{ width: '100vw', textAlign: 'center', margin: '20vh' }}
              >
                <h1>Loading blogs...</h1>
              </div>
            </>
          )}
          {areError === true ? (
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
          ) : (
            <SectionWithImg images={blogs} sections={blogs} />
          )}
        </section>
      </main>
    </>
  );
}

function mapStateToProps({ blogsReducer }) {
  const { blogs } = blogsReducer;
  return { blogs };
}

export default connect(mapStateToProps, {})(MainBlog);
