import React from 'react';
import Img from './Img';
import {
  Container,
  DescriptionStyles,
} from '../styles/molecules/DescriptionStyles';

function AboutMe(): JSX.Element {
  return (
    <>
      <Container>
        <Img
          alt="Ulises Antonio Sámano Galván"
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fulises5G.jfif?alt=media&token=bbe0eb8b-ee31-4ef1-a444-452691ca8f67"
        />
        <DescriptionStyles>
          <p>Web UI Developer - Globant</p>
          <div />
          <p>Future Data Scientist</p>
          <br />
          <p>Ulises Antonio Sámano Galván</p>
        </DescriptionStyles>
      </Container>
    </>
  );
}

export default AboutMe;
