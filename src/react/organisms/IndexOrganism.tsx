/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';

import '../../styles/organisms/IndexOrganism.styl';
import SectionWithImg from './SectionWithModal';
import Nav from '../atoms/Nav';
import RoundedImage from '../atoms/RoundedImage';

function IndexOrganism(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [firstPrint, setFirstPrint] = useState<boolean>(true);

  const query = window.matchMedia('(max-width: 320px)');
  useEffect(() => {
    if (query.matches && firstPrint) {
      setFirstPrint(false);
      setIsMobile(true);
      return;
    }

    query.addEventListener('change', (change) => {
      if (change.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
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
        'https://camo.githubusercontent.com/d2e1968d43217594f9348515fdbfb630a71e7647045a1507f17a59b49afc5296/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f7765622d70726f6a656374732d35306537652e61707073706f742e636f6d2f6f2f66696e646572732532466c6f676f2d66696e646572732e706e673f616c743d6d6564696126746f6b656e3d30663437373538642d313761342d343939392d626262642d623861333039373530343637',
    },
    {
      title: 'Platzi stack',
      image: Logo,
    },
    {
      title: 'Learningator image',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fprojects%2Flearningathor.jpg?alt=media&token=77ae6a9e-3201-4db0-8576-e59136c47f31',
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

  const navPaths: Array<Path> = [
    {
      id: 1,
      description: 'Ir a mi experiencia',
      name: 'Experiencia',
      path: '#experiencia',
    },
    {
      id: 2,
      description: 'Ultimas entradas del blog',
      name: 'Posts',
      path: '#posts',
    },
    {
      id: 3,
      description: 'Enlaces de contacto',
      name: 'Contacto',
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

      <div className="about-me__navigation">
        <Nav col={isMobile} paths={navPaths} backgroundIsLigth />
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
