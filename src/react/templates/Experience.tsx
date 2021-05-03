import React from 'react';
import { experienceInfos } from '../states/index';
import SectionWithModal from './SectionWithModal';
import { Container, Title } from '../../styles/templates/ExperienceStyles';

function Experience(): JSX.Element {
  return (
    <>
      <Container>
        <Title>Experiencia</Title>
        <div id="experience">
          <SectionWithModal
            images={[{ alt: '', src: '' }]}
            sections={experienceInfos}
          />
        </div>
      </Container>
    </>
  );
}

export default Experience;
