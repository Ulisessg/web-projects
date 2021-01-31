import React from 'react';

//  Styles
import '../../styles/default-styles.styl';
import '../../styles/templates/blog-styles.styl';

import Layout from '../organisms/Layout';

function Main(): JSX.Element {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Main;
