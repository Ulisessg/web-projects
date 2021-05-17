import React from 'react';
import {
  experiencesInfo,
} from '../states/index';

// import SectionWithModal from './SectionWithModal';
import SectionNoModal from './SectionNoModal';
import { Container, Title } from '../styles/templates/ExperienceStyles';
import SectionContainer from '../styles/molecules/SectionContainer';

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

            {/* {experiencesInfo.sections.map((section) => (
              <SectionWithModal
                key={section.id}
                cover={section.cover}
                description={section.description}
                id={section.id}
                name={section.name}
                path={section.path}
                elementId={section.name}
                images={section.images}
              />
            ))} */}
            {/* <SectionNoModal
              images={temporalExperienceInfosImages}
              sections={temporalExperienceInfosData}
            /> */}
          </SectionContainer>
        </div>
      </Container>
    </>
  );
}

export default Experience;
