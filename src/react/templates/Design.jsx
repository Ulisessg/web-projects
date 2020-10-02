import React from 'react';

import Header from '../organisms/Header';

const paths = [
  {
    id: '1',
    name: 'Inicio',
    path: '/',
  },
  {
    id: '2',
    name: 'Principios',
    path: '/principios',
  },
  {
    id: '3',
    name: 'Sistema',
    path: '/sistema',
  },
  {
    id: '4',
    name: 'Fundamentos',
    path: '/fundamentos',
  },
  {
    id: '5',
    name: 'Componentes',
    path: '/componentes',
  },
  {
    id: '6',
    name: 'Iteración',
    path: '/iteracion',
  },
];

const Design = () => {
  return (
    <>
      <Header paths={paths} />
    </>
  );
};

export default Design;
