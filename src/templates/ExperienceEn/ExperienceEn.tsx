import React, { FunctionComponent } from 'react';
import { experiencesInfoEnglish } from '../../states/index';
import Section from '@/organisms/Section';
import Container from '@/templates/Experience/ExperienceStyles';
import SectionContainer from '@/molecules/SectionContainer';
import H2 from '@/atoms/H2';

const ExperienceEn: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Container>
        <H2 text='Experience' />
        <div id='experience'>
          <SectionContainer>
            {experiencesInfoEnglish.map((experience) => (
              <Section
                linkSize='large'
                loadingLabel='Loading experience'
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

export default ExperienceEn;
