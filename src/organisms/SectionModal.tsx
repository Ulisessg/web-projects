import React, { useCallback, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';
import ImgLazy from '../molecules/Img';
import Loading from '../atoms/Loading';
import {
  SectionContainer,
  ImageContainer,
  Title,
  Description,
} from '../styles/organisms/SectionWithModalStyles';
import ButtonDark from '../atoms/ButtonDark';

const ModalComponent = dynamic(() => import('../organisms/ModalForSectionWithModal'), { loading: () => <Loading />, ssr: false });

function Section({
  images,
  name,
  description,
  path,
  cover,
}: SectionProps): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleKeyUp = useCallback((e: KeyboardEvent): void => {
    if ('key' in e && (e.key === 'Escape' || e.key === 'Esc')) {
      setOpenModal(false);
    } else if (e.keyCode === 27) {
      setOpenModal(false);
    }
  }, []);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const body: HTMLBodyElement = document.querySelector('body');
      // const root: HTMLElement = document.getElementById('experience');
      // Prevent scroll
      if (openModal) {
        body.addEventListener('keyup', handleKeyUp);
        // root.classList.replace('delete-blur-body', 'blur-body');
        body.style.overflow = 'hidden';
        // root.classList.add('blur-body');
      } else {
        body.style.overflow = 'auto';
        // root.classList.replace('blur-body', 'delete-blur-body');
        body.removeEventListener('keyup', handleKeyUp);
      }
    }
  }, [openModal]);

  function handleModal(): void {
    setOpenModal(!openModal);
  }

  return (
    <>
      <SectionContainer>
        <ImageContainer>
          <ImgLazy classN="section--img" src={cover.src} alt={cover.alt} />
        </ImageContainer>
        <Title>{name}</Title>

        <Description className="section--description">
          {description}
        </Description>

        <ButtonDark
          handleClick={handleModal}
          text={`Ver más sobre ${name}`}
          type="button"
        />
        {openModal && (

          <ModalComponent
            description={description}
            path={path}
            name={name}
            images={images}
            closeModal={handleModal}
          />

        )}
      </SectionContainer>
    </>
  );
}
export default Section;
