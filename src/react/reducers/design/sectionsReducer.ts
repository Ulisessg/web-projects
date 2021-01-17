// @ts-check

const INITIAL_STATE = {
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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
