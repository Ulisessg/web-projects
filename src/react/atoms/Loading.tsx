import React from 'react';

const Loading: React.FC = () => (
  <>
    <div style={{ width: '100%', height: '100%' }}>
      <progress max='100' style={{ marginTop: '25%', marginLeft: '25%' }}>
        Cargando...
      </progress>
    </div>
  </>
);

export default Loading;
