// @ts-nocheck
import block from '../../../assets/images/block.svg';
import book from '../../../assets/images/book.svg';
import cicle from '../../../assets/images/cicle.svg';
import check from '../../../assets/images/check.svg';

const initialState = {
  headerPaths: [
    {
      id: 1,
      name: 'Portafolio',
      path: '/',
    },
    {
      id: 2,
      name: 'Blog',
      path: '/blog.html',
    },
    {
      id: 3,
      name: 'Sistema',
      path: '/design-system.html',
    },
  ],
  sections: [
    {
      id: 1,
      name: 'Flujo',
      path: '/flujo.html',
      description: 'Metodologias y procedimientos para crear el producto',
    },
    {
      id: 2,
      name: 'Reglas',
      path: '/reglas',
      description:
        'Todas las caracteristicas obligatorias que debe cumplir el producto',
    },
    {
      id: 3,
      name: 'Componentes',
      path: '/componentes',
      description:
        'Un listado de todos los componentes que utilizo además de su lógica',
    },
    {
      id: 4,
      name: 'Documentación',
      path: '/documentacion',
      description:
        'Una descripción detallada de cómo ha sido creado cada producto',
    },
  ],
  images: [
    {
      title: 'Flujo',
      image: cicle,
    },
    {
      title: 'Reglas',
      image: check,
    },
    {
      title: 'Components',
      image: block,
    },
    {
      title: 'Documentación',
      image: book,
    },
  ],
};

export default initialState;
