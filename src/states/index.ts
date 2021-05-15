import { Path } from '../interfaces_and_types/organisms/FooterTypes';
import SectionWithModalProps from '../interfaces_and_types/organisms/SectionWithModalProps';

export const footerPaths: Array<Path> = [
  {
    label: 'Mi perfil de Platzi',
    text: 'Perfil de platzi',
    path: 'https://platzi.com/p/UlisesSG/',
  },
  {
    label: 'Curriculum',
    text: 'Curriculum',
    path:
      'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FFullstack%20React%20Developer%20-%20Ulises%20Antonio%20Samano%20Galvan.pdf?alt=media&token=a4b86dfa-b4ef-4f63-be7e-50e39d1970b6',
  },
  {
    label: 'Perfil de Hacker Rank',
    text: 'HackerRank',
    path: 'https://www.hackerrank.com/ukisessg',
  },
];

export const experiencesInfo: SectionWithModalProps = {
  sections: [
    {
      id: 1,
      key: 1,
      name: 'Finders - Findme',
      path: 'https://github.com/Finders-Master/finders-FE',

      description:
        'Finders es un sitio web enfocado en ayudar a localizar personas con alguna enfermedad mental o discapacidad mediante el uso de códigos QR',
      cover: {
        alt: 'Finders logo',
        src:
          'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2Ffindme.png?alt=media&token=99b04a9b-acf6-460b-8dd6-a5f508beff3a',
      },
      images: [],
    },
    {
      id: 1,
      name: 'Platzi stack',
      path: '/como-los-datos-me-ayudaron',
      description:
        'En Platzi Stack analicé las vacantes de Backend Developer que ofrece Platzi Master para analizar cuál sería el proximo lenguaje de programación que aprendería y con que Framworks / tecnologias.',
      cover: {
        alt: 'Platzi stack',
        src:
          'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2Fplatzi%20stack.png?alt=media&token=db54843b-d3b2-4bcb-a3d1-1ec0b409b99c',
      },
      images: [],
    },
    {
      id: 2,
      name: 'Learningator - Hackathon Platzi Master',
      path: 'https://github.com/Learningator/learning-200-frontend',
      description:
        'Learningator es un generador de learning paths automatizado enfocado en l@s coaches de Platzi Master que generalmente pasan 6 horas generando un nuevo Learning Path o incluso más si el coach no tiene conocimientos sobre el campo de estudio del estudiante, además la ruta de aprendizaje puede cambiar durante el programa.',
      cover: {
        alt: 'Learningator image',
        src:
          'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FLearningator.png?alt=media&token=3a092855-76a8-457c-ba5d-7a085530b1eb',
      },
      images: [],
    },
    {
      id: 3,
      name: 'Always update - Proyecto final Platzi Master',
      path: 'https://github.com/Proyecto-Noticias/Frontend',
      description:
        'Always Update es una plataforma que recopila noticias de México, Argentina, Colombia y Venezuela, recolectando más de 200 noticias todos los días y realizando un análisis sentimental de cada una mostrando el resultado con un siticker en la portada.',
      cover: {
        alt: 'Always update',
        src:
          'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FalwaysUpdate.png?alt=media&token=fe4b78ec-d2e4-4834-a1e7-ce8f2f221db6',
      },
      images: [],
    },
    {
      id: 4,
      name: 'UD',
      path: 'https://github.com/Ulisessg/web-projects',
      description:
        'UD es un sitio web enfocado principalmente en compartir conocimiento de tecnologia, además de contener mis proyectos personales, este sitio está creado usando el stack MERN y Typescript.',
      cover: {
        alt: 'UD logo',
        src:
          'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FUD.png?alt=media&token=14d7b327-3b49-4412-be21-b9816e6ab80e',
      },
      images: [],
    },
  ],
};

export const temporalExperienceInfosData = [
  {
    id: 5,
    title: 'Finders - Findme',
    description:
      'Finders es un sitio web enfocado en ayudar a localizar personas con alguna enfermedad mental o discapacidad mediante el uso de códigos QR',
    name: 'https://github.com/Finders-Master/finders-FE',
  },
  {
    id: 1,
    title: 'Platzi stack',
    description:
      'En Platzi Stack analicé las vacantes de Backend Developer que ofrece Platzi Master para analizar cuál sería el proximo lenguaje de programación que aprendería y con que Framworks / tecnologias.',
    name: '/como-los-datos-me-ayudaron',
  },
  {
    id: 2,
    title: 'Learningator - Hackathon Platzi Master',
    description:
      'Learningator es un generador de learning paths automatizado enfocado en l@s coaches de Platzi Master que generalmente pasan 6 horas generando un nuevo Learning Path o incluso más si el coach no tiene conocimientos sobre el campo de estudio del estudiante, además la ruta de aprendizaje puede cambiar durante el programa.',
    name: 'https://github.com/Learningator/learning-200-frontend',
  },
  {
    id: 3,
    title: 'Always update - Proyecto final Platzi Master',
    description:
      'Always Update es una plataforma que recopila noticias de México, Argentina, Colombia y Venezuela, recolectando más de 200 noticias todos los días y realizando un análisis sentimental de cada una mostrando el resultado con un siticker en la portada.',
    name: 'https://github.com/Proyecto-Noticias/Frontend',
  },
  {
    id: 4,
    title: 'UD',
    description:
      'UD es un sitio web enfocado principalmente en compartir conocimiento de tecnologia, además de contener mis proyectos personales, este sitio está creado usando el stack MERN y Typescript.',
    name: 'https://github.com/Ulisessg/web-projects',
  },
];

export const temporalExperienceInfosImages = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2Ffindme.png?alt=media&token=99b04a9b-acf6-460b-8dd6-a5f508beff3a',
    title: 'Finders logo',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2Fplatzi%20stack.png?alt=media&token=db54843b-d3b2-4bcb-a3d1-1ec0b409b99c',
    title: 'Platzi stack logo',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FLearningator.png?alt=media&token=3a092855-76a8-457c-ba5d-7a085530b1eb',
    title: 'Learningator logo',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FalwaysUpdate.png?alt=media&token=fe4b78ec-d2e4-4834-a1e7-ce8f2f221db6',
    title: 'Always Update logo',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FUD.png?alt=media&token=14d7b327-3b49-4412-be21-b9816e6ab80e',
    title: 'UD logo',
  },
];

export const IndexSections = [
  {
    path: '#experience',
    label: 'Mi experiencia',
    text: 'Mi experiencia',
  },
  {
    path: '#posts',
    label: 'Ultimos posts',
    text: 'Ultimos posts',
  },
  {
    path: '#contact',
    label: 'Ir al contacto',
    text: 'Ir al contacto',
  },
];
