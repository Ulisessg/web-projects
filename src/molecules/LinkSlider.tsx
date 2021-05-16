import React, { useState } from 'react';
import ButtonsForSlider from './ButtonsForSlider';
import LinkDarkBlank from '../atoms/LinkDarkBlank';
import { LinkProps } from '../interfaces_and_types/globalPropsAndProperties';

function LinkSlider({ links }: { links: Array<LinkProps>; }): JSX.Element {
  const [linkPosition, setLinkPosition] = useState<number>(0);

  function handleButtonClick(referenceNumber) {
    setLinkPosition(referenceNumber);
    //
  }

  let referenceNumner = -1;
  return (
    <>
      <LinkDarkBlank
        label={links[linkPosition].label}
        text={links[linkPosition].text}
        path={links[linkPosition].path}
        key={links[linkPosition].label}
      />

      {links.map((link) => {
        referenceNumner += 1;
        return (
          <>
            <ButtonsForSlider
              func={handleButtonClick}
              reference={referenceNumner}
              key={link.path}
            />
          </>
        );
      })}
    </>
  );
}

export default LinkSlider;
