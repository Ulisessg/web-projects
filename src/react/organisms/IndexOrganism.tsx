/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';

import '../../styles/organisms/IndexOrganism.styl';
import SectionWithImg from './SectionWithModal';
import RoundedImage from '../atoms/RoundedImage';
import NavLigthNoBlank from '../molecules/NavLigthNoBlank';

const query = window.matchMedia('(max-width: 650px)');
const initialWidth = window.outerWidth <= 320 ? 'column' : 'row';

function IndexOrganism(): JSX.Element {
  const [isMobile, setIsMobile] = useState<'row' | 'column'>(initialWidth);

  useEffect(() => {
    query.addEventListener('change', (change) => {
      if (change.matches) {
        setIsMobile('column');
      } else {
        setIsMobile('row');
      }
    });
  }, [isMobile]);

  interface Path {
    id: number;
    name: string;
    description: string;
    path: string;
  }

  const Logo =
    'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888';

  const projectsImages = [
    {
      title: 'Finders logo',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2Ffindme.png?alt=media&token=349b36d9-a692-4461-8ca5-c33e839ae5d3',
    },
    {
      title: 'Platzi stack',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2Fplatzi%20stack.png?alt=media&token=db54843b-d3b2-4bcb-a3d1-1ec0b409b99c',
    },
    {
      title: 'Learningator image',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2FLearningator.png?alt=media&token=3a092855-76a8-457c-ba5d-7a085530b1eb',
    },
    {
      title: 'Always update',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2FalwaysUpdate.ico?alt=media&token=d41e23f6-aeec-40d6-ab25-7e698f7b4e19',
    },
    {
      title: 'UD logo',
      image: Logo,
    },
  ];
  const projectsInfo = [
    {
      id: 5,
      name: 'Finders - Findme',
      path: 'https://github.com/Finders-Master/finders-FE',
      description:
        'Finders es un sitio web enfocado en ayudar a localizar personas con alguna enfermedad mental o discapacidad mediante el uso de códigos QR',
    },
    {
      id: 1,
      name: 'Platzi stack',
      path: '/como-los-datos-me-ayudaron',
      description:
        'En Platzi Stack analicé las vacantes de Backend Developer que ofrece Platzi Master para analizar cuál sería el proximo lenguaje de programación que aprendería y con que Framworks / tecnologias.',
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
      path: 'https://github.com/Proyecto-Noticias/Frontend',
      description:
        'Always Update es una plataforma que recopila noticias de México, Argentina, Colombia y Venezuela, recolectando más de 200 noticias todos los días y realizando un análisis sentimental de cada una mostrando el resultado con un siticker en la portada.',
    },
    {
      id: 4,
      name: 'UD',
      path: 'https://github.com/Ulisessg/web-projects',
      description:
        'UD es un sitio web enfocado principalmente en compartir conocimiento de tecnologia, además de contener mis proyectos personales, este sitio está creado usando el stack MERN y Typescript.',
    },
  ];

  const navPaths = [
    {
      label: 'Ir a mi experiencia',
      text: 'Mi experiencia',
      path: '#experiencia',
    },
    {
      label: 'Ultimas entradas del blog',
      text: 'Ultimos posts',
      path: '#posts',
    },
    {
      label: 'Enlaces de contacto',
      text: 'Ir a contacto',
      path: '#contacto',
    },
  ];

  return (
    <>
      <div className="about-me">
        <RoundedImage
          widthMobile="180px"
          widthTablet="300px"
          widthLaptop="300px"
          widthDesktop="300px"
          bottom=""
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fulises5G.jfif?alt=media&token=bbe0eb8b-ee31-4ef1-a444-452691ca8f67"
        />
        <h1 className="about-me__title">
          Frontend / Backend
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <br /> Future Data Sciencetist
        </h1>
        <h2 className="about-me__name">Ulises Antonio Sámano Galván</h2>
      </div>

      <div style={{ height: '45vh' }} className="about-me__navigation">
        {/* <Nav col={isMobile} paths={navPaths} backgroundIsLigth /> */}

        <NavLigthNoBlank dir={isMobile} paths={navPaths} />
      </div>

      {/* Main content */}

      <h2>Experiencia</h2>

      <div className="wrapper">
        <section className="sections" id="experiencia">
          <SectionWithImg images={projectsImages} sections={projectsInfo} />
        </section>
      </div>
    </>
  );
}

export default IndexOrganism;
