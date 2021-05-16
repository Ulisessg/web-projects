import React from 'react';
import dynamic from 'next/dynamic';
import ButtonClose from '../atoms/ButtonClose';
import LinkDarkBlank from '../atoms/LinkDarkBlank';
import {
  SectionModalContainer,
  SectionModalTitle,
  ExternalStyles,
} from '../styles/molecules/SectionModalStyles';
import SectionModalProps from '../interfaces_and_types/molecules/SectionModalProps';
import Loading from '../atoms/Loading';

const ImageSlider = dynamic(() => import('../molecules/ImageSlider'), { loading: () => <Loading /> });

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

        {/* <SectionModalImageContainer>
          <ImgLazy classN="section-modal--img" src={src} alt={alt} />
        </SectionModalImageContainer> */}
        <SectionModalTitle className="section__modal--title">
          {name}
        </SectionModalTitle>

        {images.length > 0 && (
          <>
            <div style={{ width: '100px' }}>
              <ImageSlider images={images} />
            </div>
          </>
        )}

        {/* Description temporally disabled */}
        <p>{description}</p>

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
