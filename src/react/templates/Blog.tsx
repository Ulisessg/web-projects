import React from 'react';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/organisms/mainBlog-styles.styl';
import '../../styles/templates/blog-styles.styl';
import '../../styles/atoms/footer.styl';
import '../../styles/organisms/header.styl';
import '../../styles/atoms/skipLink.styl';

//  Components
import MainBlog from '../organisms/MainBlog';

function Blog(): JSX.Element {
  return (
    <>
      <div className='wrapper'>
        <MainBlog />
      </div>
    </>
  );
}

export default Blog;
