/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  Container,
  DescriptionStyles,
} from '../styles/molecules/DescriptionStyles';

function AboutMe(): JSX.Element {
  return (
    <>
      <Container>
        <figure aria-label='Ulises Antonio Samano Galvan - Web UI Developer - Globant'>
          <img
            role='presentation'
            loading='eager'
            alt=''
            src='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan.jpg?alt=media&token=67d05c1b-f0c5-49df-9138-59a68072e9f4'
          />
        </figure>
        <DescriptionStyles>
          <p>Web UI Developer - Globant</p>
          <div />
          <p>Future Data Scientist</p>
          <br />
          <p>Ulises Antonio Samano Galvan</p>
        </DescriptionStyles>
      </Container>
    </>
  );
}

export default AboutMe;
