import React from 'react';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/blog-styles.styl';
import '../../styles/atoms/footer.styl';
import '../../styles/organisms/header.styl';
import '../../styles/atoms/skipLink.styl';

function Main(): JSX.Element {
  return (
    <>
      <main>
        <h1>
          Work in progress...
          <span role='img' aria-label='emoji'>
            😄
          </span>
        </h1>
        <br />
        <a href='design.html' className='link'>
          <h1>Actualmente estoy trabajando en un sistema de diseño</h1>
        </a>
      </main>
    </>
  );
}

export default Main;
