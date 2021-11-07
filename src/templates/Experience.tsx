import React, { FunctionComponent } from 'react';
import { experiencesInfo } from '../states/index';
import Section from '../organisms/Section';
import Container from '../styles/templates/ExperienceStyles';
import SectionContainer from '../styles/molecules/SectionContainer';
import H2 from '../atoms/H2';

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
