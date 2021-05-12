import React from 'react';

//  Components
import MainBlog from '../organisms/MainBlog';

function Blog(): JSX.Element {
  return (
    <>
      <div style={{ margin: '0 auto', width: '90vw' }}>
        <MainBlog />
      </div>
    </>
  );
}

export default Blog;
