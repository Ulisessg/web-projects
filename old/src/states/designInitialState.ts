/* eslint-disable import/prefer-default-export */
import { SectionProps } from '../types/props';
export const sections: SectionProps[] = [
  {
    id: 1,
    linkSize: 'large',
    loadingLabel: '',
    title: 'Flujo',
    name: '/flujo',
    description: 'Metodologias y procedimientos para crear el producto',
    image: {
      alt: 'Flujo',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fcicle.svg?alt=media&token=9ff20619-06e4-4239-96d8-a05e03dba0f0',
    },
  },
  {
    id: 2,
    title: 'Reglas',
    name: '/reglas',
    linkSize: 'large',
    loadingLabel: '',
    description:
      'Todas las caracteristicas obligatorias que debe cumplir el producto',
    image: {
      alt: 'Reglas',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fcheck.svg?alt=media&token=44d90861-1985-4eb4-8a8f-a277386d39dd',
    },
  },
  {
    id: 3,
    title: 'Componentes',
    linkSize: 'large',
    loadingLabel: '',
    name: '/componentes',
    description:
      'Un listado de todos los componentes que utilizo además de su lógica',
    image: {
      alt: 'Components',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fblock.svg?alt=media&token=31393154-b2ab-4af8-bb65-ae97127ca0b7',
    },
  },
  {
    id: 4,
    title: 'Documentación',
    name: '/documentacion',
    linkSize: 'large',
    loadingLabel: '',
    description:
      'Una descripción detallada de cómo ha sido creado cada producto',
    image: {
      alt: 'Documentación',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fbook.svg?alt=media&token=4a94e82c-7e98-4b04-aad1-6204f9269c46',
    },
  },

];
