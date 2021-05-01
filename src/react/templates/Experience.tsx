import React from 'react';
import { experienceInfos, experienceImages } from '../states/index';
import SectionWithModal from '../organisms/SectionWithModal';
import { Container, Title } from '../../styles/templates/ExperienceStyles';

function Experience(): JSX.Element {
  return (
    <>
      <Container>
        <Title>Experiencia</Title>
        <div id="experience">
          <SectionWithModal
            images={experienceImages}
            sections={experienceInfos}
          />
        </div>
      </Container>
    </>
  );
}

export default Experience;
