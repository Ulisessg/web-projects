import { Path } from '../interfaces_and_types/organisms/FooterTypes';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';

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
      'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FFull%20Stack%20-%20Ulises%20Antonio%20Samano%20Galvan.pdf?alt=media&token=433c6049-d994-492e-be35-5ce5ce582495',
  },
  {
    label: 'Perfil de Hacker Rank',
    text: 'HackerRank',
    path: 'https://www.hackerrank.com/ukisessg',
  },
];

export const experiencesInfo: Array<SectionProps> = [
  {
    id: 1,
    title: 'Finders - Findme',
    name: 'https://github.com/Finders-Master/finders-FE',

    description:
      'Finders es un sitio web enfocado en ayudar a localizar personas con alguna enfermedad mental o discapacidad mediante el uso de códigos QR',
    image: {
      alt: 'Finders logo',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FFindMe%20-%20Platzi%20Master%20Swat%20NEO.png?alt=media&token=d8f6a697-d1a3-45df-beb6-9cc9793265e9',
    },
  },
  {
    id: 7,
    title: 'Platzi stack',
    name: '/como-los-datos-me-ayudaron',
    description:
      'En Platzi Stack analicé las vacantes de Backend Developer que ofrece Platzi Master para analizar cuál sería el proximo lenguaje de programación que aprendería y con que Framworks / tecnologias.',
    image: {
      alt: 'Platzi stack',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FPlatzi%20Stack.png?alt=media&token=77b51ddb-88b8-4775-b23d-9cb58e59210a',
    },
  },
  {
    id: 2,
    title: 'Learningator - Hackathon Platzi Master',
    name: 'https://github.com/Learningator/learning-200-frontend',
    description:
      'Learningator es un generador de learning paths automatizado enfocado en l@s coaches de Platzi Master que generalmente pasan 6 horas generando un nuevo Learning Path o incluso más si el coach no tiene conocimientos sobre el campo de estudio del estudiante, además la ruta de aprendizaje puede cambiar durante el programa.',
    image: {
      alt: 'Learningator image',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FLearningator%20Hackathon%20Platzi%20Master.png?alt=media&token=220cd771-f08d-4bcd-9589-a2ee7272b627',
    },
  },
  {
    id: 3,
    title: 'Always update - Proyecto final Platzi Master',
    name: 'https://github.com/Proyecto-Noticias/Frontend',
    description:
      'Always Update es una plataforma que recopila noticias de México, Argentina, Colombia y Venezuela, recolectando más de 200 noticias todos los días y realizando un análisis sentimental de cada una mostrando el resultado con un siticker en la portada.',
    image: {
      alt: 'Always update',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FAlways%20Update%20Platzi%20Master%20Final%20Project.png?alt=media&token=8b8c0d77-c1ef-4641-b4d3-6f9524d91955',
    },
  },
  {
    id: 4,
    title: 'UD',
    name: 'https://github.com/Ulisessg/web-projects',
    description:
      'UD es un sitio web enfocado principalmente en compartir conocimiento de tecnologia, además de contener mis proyectos personales, este sitio está creado usando el stack MERN y Typescript.',
    image: {
      alt: 'UD logo',
      src:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FUD%20Personal%20Project.png?alt=media&token=cc8c74e6-330c-4b85-84ab-b23ab223b0ac',
    },
  }];

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
