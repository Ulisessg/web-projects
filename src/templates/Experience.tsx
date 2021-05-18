import React from 'react';
import {
  experiencesInfo,
} from '../states/index';

// import SectionWithModal from './SectionWithModal';
import SectionNoModal from '../organisms/SectionNoModal';
import { Container, Title } from '../styles/templates/ExperienceStyles';
import SectionContainer from '../styles/molecules/SectionContainer';

function Experience(): JSX.Element {
  return (
    <>
      <Container>
        <Title>Experiencia</Title>
        <div id="experience">
          <SectionContainer>
            {experiencesInfo.map((experience) => (
              <SectionNoModal
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
}

export default Experience;
