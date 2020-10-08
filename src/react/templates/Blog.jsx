import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../images/favicon.png';

//Styles
import '../../styles/default-styles.styl';
import '../../styles/pages/redirect.styl';

//Components
const Header = lazy(() => import('../organisms/Header'));

const paths = [
  {
    id: '1',
    name: 'Inicio',
    path: '/',
  },
  {
    id: '2',
    name: 'Blog',
    path: '/blog',
  },
  {
    id: '3',
    name: 'Sistema de diseño',
    path: '/design',
  },
];

const Blog = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Helmet>
          <link rel='icon' type='image/vnd.microsoft.icon' href={Icon} />
          <meta name='description' content='Noticias de tecnologia' />
        </Helmet>
        <Header paths={paths} />

        <h1>
          Work in progress...
          <span role='img' aria-label='emoji'>
            😀
          </span>
        </h1>
        <br />
        <a href='/design' className='link'>
          <h1>Actualmente estoy trabajando en un sistema de diseño</h1>
        </a>
      </Suspense>
    </>
  );
};

export default Blog;
