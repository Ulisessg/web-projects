import React from 'react';
import SectionNoModal from '../organisms/SectionNoModal';
import GistsProps from '../interfaces_and_types/templates/GistsProps';
import H2 from '../atoms/H2';
import SectionContainer from '../styles/molecules/SectionContainer';

function Gists({ gists, isPageOrSection }: GistsProps): JSX.Element {
  return (
    <>
      <div style={{ width: '90vw', margin: '0 auto' }}>
        {isPageOrSection === 'page' ? <h1 style={{ textAlign: 'center', marginTop: '50px' }}> Últimos Gists</h1> : (
          <H2
            text="Últimos Gists"
          />
        )}
        <SectionContainer>
          {gists.map((gist) => (
            <SectionNoModal
              key={gist.name}
              description={gist.description}
              image={gist.image}
              id={gist.name}
              name={gist.name}
              title={gist.title}
            />
          ))}
        </SectionContainer>
      </div>
    </>
  );
}

export default Gists;
