import React from 'react';
import { createPortal } from 'react-dom';
import ButtonClose from '../atoms/ButtonClose';
import ImgLazy from './Img';
import LinkDarkBlank from '../atoms/LinkDarkBlank';
import {
  SectionModalContainer,
  SectionModalImageContainer,
  SectionModalTitle,
  ExternalStyles,
} from '../../styles/molecules/SectionModalStyles';
import { SectionModalProps } from '../interfaces';

function SectionModal({
  src,
  alt,
  name,
  path,
  description,
  closeModal,
}: SectionModalProps): JSX.Element {
  return createPortal(
    <>
      <ExternalStyles />
      <SectionModalContainer>
        <ButtonClose handleClick={closeModal} />

        <SectionModalImageContainer>
          <ImgLazy classN="section-modal--img" src={src} alt={alt} />
        </SectionModalImageContainer>
        <SectionModalTitle className="section__modal--title">
          {name}
        </SectionModalTitle>
        <p>{description}</p>

        <LinkDarkBlank
          label={`Ver más sobre ${name}`}
          path={path}
          text={`Ver más sobre ${name}`}
          className="section-modal-link"
        />
      </SectionModalContainer>
    </>,
    document.getElementById('modal'),
  );
}

export default SectionModal;
