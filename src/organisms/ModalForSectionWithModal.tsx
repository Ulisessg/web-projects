import React from 'react';
import ButtonClose from '../atoms/ButtonClose';
import LinkDarkBlank from '../atoms/LinkDarkBlank';
import {
  SectionModalContainer,
  SectionModalTitle,
  ExternalStyles,
} from '../styles/molecules/SectionModalStyles';
import SectionModalProps from '../interfaces_and_types/molecules/SectionModalProps';
import ModalSlider from '../molecules/ModalSlider';

function SectionModal({
  name,
  path,
  description,
  closeModal,
  images,
}: SectionModalProps): JSX.Element {
  return (
    <>
      <ExternalStyles />
      <SectionModalContainer>
        <ButtonClose handleClick={closeModal} />

        <SectionModalTitle className="section__modal--title">
          {name}
        </SectionModalTitle>

        <ModalSlider description={description} links={[{ label: 'some', text: 'Some', path: '/some' }, { label: 'Other', text: 'Other', path: '/other' }]} images={images} />

        <LinkDarkBlank
          label={`Ver más sobre ${name}`}
          path={path}
          text={`Ver más sobre ${name}`}
          className="section-modal-link"
        />
      </SectionModalContainer>
    </>
  );
}

export default SectionModal;
