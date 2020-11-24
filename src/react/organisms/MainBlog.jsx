import React from 'react';

import '../../styles/organisms/mainBlog-styles.styl';

const MainBlog = () => {
  return (
    <>
      <main id='main'>
        <section className='blog-wrapper'>
          <h1>
            Work in progress...
            <span role='img' aria-label='emoji'>
              😄
            </span>
          </h1>
          <br />

          <div className='link-container'>
            <a href='/design' className='link'>
              Actualmente estoy trabajando en un sistema de diseño
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainBlog;
