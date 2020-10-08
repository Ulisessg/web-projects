import React, { lazy } from 'react';

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
      <Header paths={paths} />
    </>
  );
};

export default Blog;
