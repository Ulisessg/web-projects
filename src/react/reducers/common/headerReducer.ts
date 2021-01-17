const INITIAL_STATE = {
  headerPaths: [
    {
      id: 1,
      name: 'About',
      description: 'Sobre mí',
      path: '/',
    },
    {
      id: 2,
      name: 'Blog',
      description: 'Blog sobre tecnología',
      path: '/blog.html',
    },
    {
      id: 3,
      name: 'Sistema',
      description: 'Sistema de diseño',
      path: '/design.html',
    },
  ],
};

export default (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case '':
      return { ...state };
    default:
      return { ...state };
  }
};
