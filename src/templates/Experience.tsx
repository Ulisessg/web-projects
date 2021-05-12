import React from 'react';
// import { experienceInfos } from '../states/index';

import {
  temporalExperienceInfosData,
  temporalExperienceInfosImages,
} from '../states/index';
// import SectionWithModal from './SectionWithModal';
import SectionNoModal from './SectionNoModal';
import { Container, Title } from '../../styles/templates/ExperienceStyles';
import SectionContainer from '../../styles/molecules/SectionContainer';

function Experience(): JSX.Element {
  return (
    <>
      <Container>
        <Title>Experiencia</Title>
        <div id="experience">
          <SectionContainer>
            {/* {experienceInfos.map((experience) => (
              <SectionNoModal
              images
                sections={experience}
                key={experience.sections.id}
              />
            ))} */}

            <SectionNoModal
              images={temporalExperienceInfosImages}
              sections={temporalExperienceInfosData}
            />
          </SectionContainer>
        </div>
      </Container>
    </>
  );
}

export default Experience;
