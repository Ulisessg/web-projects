import React from 'react';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Components
import Layout from '../organisms/Layout';

const Main = () => {
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
};

export default Main;
