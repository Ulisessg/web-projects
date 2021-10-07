import React from 'react';
import {
  experiencesInfo,
} from '../states/index';

// import SectionWithModal from './SectionWithModal';
import SectionNoModal from '../organisms/SectionNoModal';
import Container from '../styles/templates/ExperienceStyles';
import SectionContainer from '../styles/molecules/SectionContainer';
import H2 from '../atoms/H2';

function Experience(): JSX.Element {
  return (
    <>
      <Container>
        <H2 text="Experiencia" />
        <div id="experience">
          <SectionContainer>
            {experiencesInfo.map((experience) => (
              <SectionNoModal
                loadingLabel="Cargando experiencia"
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
