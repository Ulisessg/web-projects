import React from 'react';

import SectionWithImg from '../atoms/SectionWithImg';

function IndexOrganism(): JSX.Element {
  const tempImg = [
    {
      title: 'Platzi stack',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Flogo.png?alt=media&token=65636b9b-0dcd-4845-b66a-56e2c5b762b0',
    },
    {
      title: 'Learningator image',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fprojects%2FLearningator.jfif?alt=media&token=937bdd92-1ca4-4f5e-a756-66a40e0fe8f2',
    },
    {
      title: 'Always update',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fprojects%2FLearningator.jfif?alt=media&token=937bdd92-1ca4-4f5e-a756-66a40e0fe8f2',
    },
    {
      title: 'UD logo',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Flogo.png?alt=media&token=65636b9b-0dcd-4845-b66a-56e2c5b762b0',
    },
  ];
  const tempSect = [
    {
      id: 1,
      name: 'Platzi stack',
      path: '/como-los-datos-me-ayudaron',
      description:
        'En Platzi Stack analicé las vacantes de Backend Developer que ofrece Platzi Master para analizar cuál sería el proximo lenguaje de programación que aprendería y con que Framworks/tecnologias',
    },
    {
      id: 2,
      name: 'Learningator - Hackathon Platzi Master',
      path: 'https://github.com/Learningator/learning-200-frontend',
      description:
        'Learningator es un generador de learning paths automatizado enfocado en l@s coaches de Platzi Master que generalmente pasan 6 horas generando un nuevo Learning Path o incluso más si el coach no tiene conocimientos sobre el campo de estudio del estudiante, además la ruta de aprendizaje puede cambiar durante el programa.',
    },
    {
      id: 3,
      name: 'Always update - Proyecto final Platzi Master',
      path: 'https://github.com/Learningator/learning-200-frontend',
      description:
        "Learningator is an automatized learning path generator focused in coaches of Platzi Master who generally pass 6 hours to generate a new learning path or more if the coach don't have knwoldege about the field of the student, besides the learnign path can change durring the programm.",
    },
    {
      id: 4,
      name: 'UD',
      path: 'https://github.com/Learningator/learning-200-frontend',
      description:
        'UD es un sitio web enfocado principalmente en compartir conocimiento de tecnologia, además de contener mis proyectos personales, este sitio está creado usando el stack MERN y Typescript',
    },
  ];

  return (
    <>
      <SectionWithImg images={tempImg} sections={tempSect} />
    </>
  );
}

export default IndexOrganism;
