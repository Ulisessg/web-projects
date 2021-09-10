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
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan.jpg?alt=media&token=67d05c1b-f0c5-49df-9138-59a68072e9f4"
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
