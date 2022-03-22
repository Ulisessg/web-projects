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
    path: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FWeb%20UI%20Developer%20-%20Ulises%20Antonio%20Samano%20Galvan.pdf?alt=media&token=59de2731-f505-42b6-91cd-6fa6439183f5',
  },
  {
    label: 'Perfil de Hacker Rank',
    text: 'HackerRank',
    path: 'https://www.hackerrank.com/ukisessg',
  },
];

export const experiencesInfo: Array<SectionProps> = [
  {
    id: 13,
    title: 'Globant - Web UI Developer',
    name: 'https://www.linkedin.com/in/ulisessg/',
    description: 'Actualmente trabajo aquí',
    image: {
      alt: 'Globant logo',
      src: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
    },
    loadingLabel: 'Cargando: mi experiencia en Globant',
  },
  {
    id: 12,
    title: 'UCA - Platzi Master Jam',
    name: 'https://github.com/Platzi-MasterJam/UCA',
    loadingLabel: 'Cargando: UCA - Platzi Master Jam',
    description:
      'La aplicación UCA tiene como objetivo mostrar información en tiempo real sobre cómo está la contaminación en la ciudad que quieres visitar o vivir. Utilizamos datos de múltiples organismos mundiales que recogen esta información.',
    image: {
      alt: 'Platzi Master Jam logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FPlatzi%20master%20jam.png?alt=media&token=05875380-0772-4856-bbc6-0f16b693b1d8',
    },
  },
  {
    id: 1,
    title: 'Finders - Findme',
    name: 'https://github.com/Finders-Master/finders-FE',
    loadingLabel: 'Cargando: Finders',
    description:
      'Finders es un sitio web enfocado en ayudar a localizar personas con alguna enfermedad mental o discapacidad mediante el uso de códigos QR',
    image: {
      alt: 'Finders logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FFindMe%20-%20Platzi%20Master%20Swat%20NEO.png?alt=media&token=d8f6a697-d1a3-45df-beb6-9cc9793265e9',
    },
  },
  {
    id: 7,
    title: 'Platzi stack',
    name: '/como-los-datos-me-ayudaron',
    loadingLabel: 'Cargando: Cómo los datos me ayudaron',
    description:
      'En Platzi Stack analicé las vacantes de Backend Developer que ofrece Platzi Master para analizar cuál sería el proximo lenguaje de programación que aprendería y con que Framworks / tecnologias.',
    image: {
      alt: 'Platzi stack',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FPlatzi%20Stack.png?alt=media&token=77b51ddb-88b8-4775-b23d-9cb58e59210a',
    },
  },
  {
    id: 2,
    title: 'Learningator - Hackathon Platzi Master',
    name: 'https://github.com/Learningator/learning-200-frontend',
    loadingLabel: 'Cargando: Learningator',
    description:
      'Learningator es un generador de learning paths automatizado enfocado en l@s coaches de Platzi Master que generalmente pasan 6 horas generando un nuevo Learning Path o incluso más si el coach no tiene conocimientos sobre el campo de estudio del estudiante, además la ruta de aprendizaje puede cambiar durante el programa.',
    image: {
      alt: 'Learningator image',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FLearningator%20Hackathon%20Platzi%20Master.png?alt=media&token=220cd771-f08d-4bcd-9589-a2ee7272b627',
    },
  },
  {
    id: 3,
    title: 'Always update - Proyecto final Platzi Master',
    name: 'https://github.com/Proyecto-Noticias/Frontend',
    loadingLabel: 'Cargando: Always Update',
    description:
      'Always Update es una plataforma que recopila noticias de México, Argentina, Colombia y Venezuela, recolectando más de 200 noticias todos los días y realizando un análisis sentimental de cada una mostrando el resultado con un siticker en la portada.',
    image: {
      alt: 'Always update',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FAlways%20Update%20Platzi%20Master%20Final%20Project.png?alt=media&token=8b8c0d77-c1ef-4641-b4d3-6f9524d91955',
    },
  },
  {
    id: 4,
    title: 'UD',
    name: 'https://github.com/Ulisessg/web-projects',
    loadingLabel: 'Cargando: UD',
    description:
      'UD es un sitio web enfocado principalmente en compartir conocimiento de tecnologia, además de contener mis proyectos personales, este sitio está creado usando el stack MERN y Typescript.',
    image: {
      alt: 'UD logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FUD%20Personal%20Project.png?alt=media&token=cc8c74e6-330c-4b85-84ab-b23ab223b0ac',
    },
  },
];

export const experiencesInfoEnglish: Array<SectionProps> = [
  {
    id: 13,
    title: 'Globant - Web UI Developer',
    name: 'https://www.linkedin.com/in/ulisessg/',
    description: 'My current job',
    image: {
      alt: 'Globant logo',
      src: 'https://brand.globant.com/assets/images/logo-2.jpg',
    },
    loadingLabel: 'Loading: my experience in Globant',
  },
  {
    id: 12,
    title: 'UCA - Platzi Master Jam',
    name: 'https://github.com/Platzi-MasterJam/UCA',
    loadingLabel: 'Loading: UCA - Platzi Master Jam',
    description:
      'The UCA application aims to show real-time information about how the pollution is in the city you want to visit or live. We use data from multiple global organizations that collect this information.',
    image: {
      alt: 'Platzi Master Jam logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FPlatzi%20master%20jam.png?alt=media&token=05875380-0772-4856-bbc6-0f16b693b1d8',
    },
  },
  {
    id: 1,
    title: 'Finders - Findme',
    name: 'https://github.com/Finders-Master/finders-FE',
    loadingLabel: 'Loading: Finders - Findme',
    description:
      'Finders is a website focused on helping to locate people with a mental illness or disability usin QR codes',
    image: {
      alt: 'Finders logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FFindMe%20-%20Platzi%20Master%20Swat%20NEO.png?alt=media&token=d8f6a697-d1a3-45df-beb6-9cc9793265e9',
    },
  },
  {
    id: 7,
    title: 'Platzi stack',
    name: '/como-los-datos-me-ayudaron',
    loadingLabel: 'Loading: Platzi Stack',
    description:
      'In Platzi Stack I analyzed the Backend Developer vacancies offered by Platzi Master to analyze what would be the next programming language that I would learn and with which Framworks / technologies.',
    image: {
      alt: 'Platzi stack',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FPlatzi%20Stack.png?alt=media&token=77b51ddb-88b8-4775-b23d-9cb58e59210a',
    },
  },
  {
    id: 2,
    title: 'Learningator - Hackathon Platzi Master',
    name: 'https://github.com/Learningator/learning-200-frontend',
    loadingLabel: 'Loading: Learningator',
    description:
      "Learningator is an automatized learning path generator focused in coaches of Platzi Master who generally pass 6 hours to generate a new learning path or more if the coach don't have knwoldege about the field of the student, besides the learnign path can change durring the programm.",
    image: {
      alt: 'Learningator image',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FLearningator%20Hackathon%20Platzi%20Master.png?alt=media&token=220cd771-f08d-4bcd-9589-a2ee7272b627',
    },
  },
  {
    id: 3,
    title: 'Always update - Final project Platzi Master',
    name: 'https://github.com/Proyecto-Noticias/Frontend',
    loadingLabel: 'Loading: Always update',
    description:
      'Always Update is a newspaper platform who scrapping news of Mexico, Argentina, Colombia and Venezuela, collecting more than 200 news every day and realizing a sentimental analysis showing the result with a sticker in the cover page.',
    image: {
      alt: 'Always update',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FAlways%20Update%20Platzi%20Master%20Final%20Project.png?alt=media&token=8b8c0d77-c1ef-4641-b4d3-6f9524d91955',
    },
  },
  {
    id: 4,
    title: 'UD',
    name: 'https://github.com/Ulisessg/web-projects',
    loadingLabel: 'Loading: UD',
    description:
      'UD is a website that focused on sharing knowledge, mainly about technology and contain my latest projects.',
    image: {
      alt: 'UD logo',
      src: 'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FUD%20Personal%20Project.png?alt=media&token=cc8c74e6-330c-4b85-84ab-b23ab223b0ac',
    },
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

export const IndexSectionsEnglish = [
  {
    path: '#experience',
    label: 'My experience',
    text: 'My experience',
  },
  {
    path: '#posts',
    label: 'Last posts',
    text: 'Last posts',
  },
  {
    path: '#contact',
    label: 'Contact',
    text: 'Contact',
  },
];
