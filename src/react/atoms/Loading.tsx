import React from 'react';
import '../../styles/atoms/loadingSpinner.styl';

const Loading: React.FC = () => (
  <>
    <div className="loading-spinner--container">
      <div className="loading-spinner" />
    </div>
  </>
);

export default Loading;
