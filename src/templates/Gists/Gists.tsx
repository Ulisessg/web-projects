import React, { FunctionComponent } from 'react';
import Section from '@/organisms/Section';
import { GistsProps } from '@/props';
import H2 from '@/atoms/H2';
import SectionContainer from '@/molecules/SectionContainer';
import { GitsContainer } from './GistStyles';

const Gists: FunctionComponent<GistsProps> = (
  props: GistsProps
): JSX.Element => {
  return (
    <>
      <GitsContainer
        aria-label='Gists'
        style={{ width: '90vw', margin: '0 auto' }}
      >
        {props.isPageOrSection === 'page' ? (
          <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
            Últimos Gists
          </h1>
        ) : (
          <H2 text='Últimos Gists' />
        )}
        <SectionContainer>
          {props.gists.map((gist) => (
            <Section
              linkSize='large'
              loadingLabel='Cargando Gist'
              key={gist.name}
              description={gist.description}
              image={gist.image}
              id={gist.name}
              name={gist.name}
              title={gist.title}
            />
          ))}
        </SectionContainer>
      </GitsContainer>
    </>
  );
};

export default Gists;
