import React from 'react';
import CircleButtonStyles from '../../styles/atoms/CircleButtonStyles';

function circleButton({ func }: { func: () => void }): JSX.Element {
  return (
    <CircleButtonStyles
      onClick={func}
      aria-label="Cambiar de imagen"
      type="button"
    />
  );
}

export default circleButton;
