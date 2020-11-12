//@ts-check
const design = {
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
};

const blog = {};

export { design, blog };
