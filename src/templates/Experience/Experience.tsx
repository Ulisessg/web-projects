import React, { FunctionComponent } from 'react';
import { experiencesInfo } from '../../states';
import Section from '@/organisms/Section';
import SectionContainer from '@/molecules/SectionContainer';
import H2 from '@/atoms/H2';
import styled from 'styled-components';
import { slice } from 'styles/keyframes';

export const Container = styled.section`
  width: 90vw;
  display: grid;
  display: -moz-grid;
  display: -ms-grid;
  justify-items: center;
  margin: 50px auto;
  animation: ${slice} 0.8s;
`;

const Experience: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Container aria-label='Mi experiencia laboral'>
        <H2 text='Experiencia' />
        <div id='experience'>
          <SectionContainer>
            {experiencesInfo.map((experience) => (
              <Section
                linkSize='large'
                loadingLabel='Cargando experiencia'
                title={experience.title}
                description={experience.description}
                id={experience.title}
                image={experience.image}
                name={experience.name}
                key={experience.name}
              />
            ))}
          </SectionContainer>
        </div>
      </Container>
    </>
  );
};

export default Experience;
