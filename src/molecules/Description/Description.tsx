/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { boxShadowColor } from 'styles/variables';
import { slice } from 'styles/keyframes';

const Container = styled.section`
  display: grid;
  display: -moz-grid;
  display: -ms-grid;
  justify-items: center;
  margin-top: 5vh;
  text-align: center;
  animation: ${slice} 0.8s;
  & img {
    width: 150px;
    border-radius: 50%;
    box-shadow: 0px 3px 12px 0px ${boxShadowColor};

    @media screen and (min-width: 425px) {
      width: 160px;
    }
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;

const DescriptionStyles = styled.h1`
  display: grid;
  display: -moz-grid;
  display: -ms-grid;
  margin-top: 20px;
  font-size: 2rem;
  animation: ${slice} 0.8s;
`;

const Description: FunctionComponent = () => {
  return (
    <>
      <Container aria-label='Sobre mi'>
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
};

export default Description;
