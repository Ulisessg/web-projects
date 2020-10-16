import React from 'react';

import '../../styles/organisms/mainBlog-styles.styl';

const MainBlog = () => {
  return (
    <>
      <main id='main'>
        <h1>
          Work in progress...
          <span role='img' aria-label='emoji'>
            😄
          </span>
        </h1>
        <br />

        <h1>
          <p>
            <a href='/design-system.html' className='link'>
              Actualmente estoy trabajando en un sistema de diseño
            </a>
          </p>
        </h1>
      </main>
    </>
  );
};

export default MainBlog;
