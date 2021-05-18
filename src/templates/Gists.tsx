import React from 'react';
import SectionNoModal from '../organisms/SectionNoModal';
import GistsProps from '../interfaces_and_types/templates/GistsProps';

import SectionContainer from '../styles/molecules/SectionContainer';

function Gists({ gists }: GistsProps): JSX.Element {
  return (
    <>
      <div style={{ width: '90vw', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            margin: '5vh 0',
          }}
        >
          Últimos Gists
        </h2>
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
