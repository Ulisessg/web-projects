import React from 'react';
import { experienceInfos, experienceImages } from '../states/index';
import SectionWithModal from '../organisms/SectionWithModal';
import { Container, Title } from '../../styles/templates/ExperienceStyles';

function Experience() {
  return (
    <>
      <Container>
        <Title>Experiencia</Title>
        <section className="sections" id="experience">
          <SectionWithModal
            images={experienceImages}
            sections={experienceInfos}
          />
        </section>
      </Container>
    </>
  );
}

export default Experience;
