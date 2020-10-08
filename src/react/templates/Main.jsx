import React, { lazy } from 'react';

//Styles
import '../../styles/pages/redirect.styl';

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

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;
