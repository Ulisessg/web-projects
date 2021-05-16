/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import React from 'react';
import CircleButton from '../atoms/CircleButton';

function ButtonsForSlider({
  func,
  reference,
  className,
}: {
  func: any;
  reference: number;
  className?: string;
}): JSX.Element {
  return (
    <>
      <div>
        <CircleButton className={className} func={() => func(reference)} />
      </div>
    </>
  );
}

export default ButtonsForSlider;
