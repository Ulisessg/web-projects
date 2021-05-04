import React from 'react';
import { experienceInfos } from '../states/index';
import SectionWithModal from './SectionWithModal';
import { Container, Title } from '../../styles/templates/ExperienceStyles';
import SectionContainer from '../../styles/molecules/SectionContainer';

function Experience(): JSX.Element {
  return (
    <>
      <Container>
        <Title>Experiencia</Title>
        <div id="experience">
          <SectionContainer>
            {experienceInfos.map((experience) => (
              <SectionWithModal
                sections={experience}

                // sections={experience.experiences}
              />
            ))}
          </SectionContainer>
        </div>
      </Container>
    </>
  );
}

export default Experience;
