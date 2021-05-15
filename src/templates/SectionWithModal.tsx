/* eslint-disable object-curly-newline */
import React from 'react';
import dynamic from 'next/dynamic';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';
import Loading from '../atoms/Loading';

const Section = dynamic(() => import('../organisms/SectionModal'), { loading: () => <Loading /> });
// Modal

function SectionWithModal({
  cover, description, id, name, path, images,
}: SectionProps): JSX.Element {
  return (
    <>
      <Section
        key={name}
        description={description}
        id={id}
        images={images}
        name={name}
        path={path}
        cover={cover}
      />
    </>
  );
}

export default SectionWithModal;
