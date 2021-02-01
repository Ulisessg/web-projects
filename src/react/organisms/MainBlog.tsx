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

function MainBlog({ blogs }: { blogs: Array<any> }): JSX.Element {
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
