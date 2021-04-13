import React, { useState, useEffect } from 'react';
import SectionNoModal from './SectionNoModal';
import GetGists from '../utils/getGists';
import LoadingSpinner from '../atoms/Loading';
import TransformGistsResponse from '../utils/transformGistsResponse';

function Gists() {
  const [response, setResponse] = useState<any>();
  const [status, setStatus] = useState<string>('loading');

  let gistsRequested: boolean = false;

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
          <h2>Últimos Gists</h2>
          <section className="sections">
            <SectionNoModal images={response} sections={response} />
          </section>
        </>
      )}
    </>
  );
}

export default Gists;
