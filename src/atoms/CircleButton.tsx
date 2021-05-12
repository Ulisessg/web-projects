import React from 'react';
import CircleButtonStyles from '../styles/atoms/CircleButtonStyles';

function circleButton({
  func,
  className,
}: {
  func: () => void;
  className?: string;
}): JSX.Element {
  return (
    <CircleButtonStyles
      onClick={func}
      aria-label="Cambiar de imagen"
      type="button"
      className={className}
    />
  );
}

export default circleButton;
