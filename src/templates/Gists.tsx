import React, { useState, useEffect } from 'react';
import SectionNoModal from './SectionNoModal';
import GetGists from '../utils/getGists';
import LoadingSpinner from '../atoms/Loading';
import TransformGistsResponse from '../utils/transformGistsResponse';
// import '../../styles/organisms/mainBlog-styles.styl';

import SectionContainer from '../../styles/molecules/SectionContainer';

function Gists(): JSX.Element {
  const [response, setResponse] = useState<any>();
  const [status, setStatus] = useState<string>('loading');

  let gistsRequested = false;

  useEffect(() => {
    gistsRequested = true;
    GetGists()
      .then((data) => {
        const tranformatedData = TransformGistsResponse(data);
        setResponse(tranformatedData);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [gistsRequested]);

  return (
    <>
      {status === 'loading' && <LoadingSpinner />}

      {status === 'error' && <h1>Error getting gists</h1>}

      {status === 'success' && (
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
              <SectionNoModal images={response} sections={response} />
            </SectionContainer>
          </div>
        </>
      )}
    </>
  );
}

export default Gists;
