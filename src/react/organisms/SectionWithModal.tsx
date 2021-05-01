/* eslint-disable object-curly-newline */
import React, { lazy, useState, Suspense, useEffect, useCallback } from 'react';
import ImgLazy from '../molecules/Img';
import ButtonDark from '../atoms/ButtonDark';
import { SectionWithModalProps } from '../interfaces';
import Loading from '../atoms/Loading';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';

import {
  Sections,
  SectionContainer,
  ImageContainer,
  Title,
  Description,
} from '../../styles/organisms/SectionWithModalStyles';

const ModalComponent = lazy(() => import('../molecules/SectionModal'));

function Section({
  id,
  images,
  name,
  description,
  path,
}: SectionProps): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleKeyUp = useCallback((e: KeyboardEvent): void => {
    if ('key' in e && (e.key === 'Escape' || e.key === 'Esc')) {
      setOpenModal(false);
    } else if (e.keyCode === 27) {
      setOpenModal(false);
    }
  }, []);

  const body: HTMLBodyElement = document.querySelector('body');
  const root: HTMLElement = document.getElementById('root');

  useEffect(() => {
    // Prevent scroll
    if (openModal) {
      body.addEventListener('keyup', handleKeyUp);
      root.classList.replace('delete-blur-body', 'blur-body');
      body.style.overflow = 'hidden';
      root.classList.add('blur-body');
    } else {
      body.style.overflow = 'auto';
      root.classList.replace('blur-body', 'delete-blur-body');
      body.removeEventListener('keyup', handleKeyUp);
    }
  }, [openModal]);

  function handleModal(): void {
    setOpenModal(!openModal);
  }

  return (
    <>
      <SectionContainer id={id} key={id}>
        <ImageContainer>
          <ImgLazy
            classN="section--img"
            src={images.image}
            alt={images.title}
          />
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
          <Suspense fallback={<Loading heightExternal="100%" />}>
            <ModalComponent
              alt={images.title}
              src={images.image}
              description={description}
              path={path}
              name={name}
              classN=""
              closeModal={handleModal}
            />
          </Suspense>
        )}
      </SectionContainer>
    </>
  );
}

function SectionWithModal({ sections, images }: SectionWithModalProps) {
  let iteration = -1;
  return (
    <>
      <Sections>
        {sections.map(
          (section): JSX.Element => {
            iteration += 1;
            return (
              <>
                <Section
                  key={section.name}
                  description={section.description}
                  id={section.id}
                  images={images[iteration]}
                  name={section.name}
                  path={section.path}
                />
              </>
            );
          },
        )}
      </Sections>
    </>
  );
}

export default SectionWithModal;
