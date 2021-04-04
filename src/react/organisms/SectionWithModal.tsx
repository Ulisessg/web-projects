import React, { lazy, useState, Suspense, useEffect } from 'react';
import ImgLazy from '../molecules/Img';
import { SectionWithModalProps } from '../interfaces';
import Loading from '../atoms/Loading';

import '../../styles/organisms/sectionWithModal.styl';

const ModalComponent = lazy(() => import('../molecules/SectionModal'));

function Section({ id, images, name, description, path }): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    const body: HTMLBodyElement = document.querySelector('body');
    const root: HTMLElement = document.getElementById('root');

    // Prevent scroll
    if (openModal) {
      root.classList.replace('delete-blur-body', 'blur-body');
      body.style.overflow = 'hidden';
      root.classList.add('blur-body');
    } else {
      body.style.overflow = 'auto';
      root.classList.replace('blur-body', 'delete-blur-body');
    }
  }, [openModal]);

  function handleModal(): void {
    setOpenModal(!openModal);
  }

  return (
    <>
      <section id={id} className="section--container" key={id}>
        <div className="section-img-container">
          <ImgLazy
            classN="section--img"
            src={images.image}
            alt={images.title}
          />
        </div>
        <h3 className="section--title">{name}</h3>
        <p className="section--description">{description}</p>
        <button
          type="button"
          aria-label={`Leer más sobre ${name}`}
          className="section--link ul__li--a-dark section-modal-button"
          onClick={handleModal}
        >
          <span>Leer más</span>
        </button>
        {openModal && (
          <Suspense fallback={<Loading />}>
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
      </section>
    </>
  );
}

function SectionWithModal({ sections, images }: SectionWithModalProps) {
  let iteration: number = -1;
  return (
    <>
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
    </>
  );
}

export default SectionWithModal;
