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

  const projectsImages = [];
  const projectsInfo = [];

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
