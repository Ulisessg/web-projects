import React from 'react';
import { createPortal } from 'react-dom';
import ImgLazy from './Img';
import { SectionModalProps } from '../interfaces';

import '../../styles/molecules/SectionModal.styl';

function SectionModal({
  src,
  alt,
  name,
  path,
  description,
  closeModal,
}: SectionModalProps): any {
  return createPortal(
    <>
      <section className="section--modal">
        <button onClick={closeModal} type="button" className="close-modal">
          X
        </button>

        <div className="section-modal-img-container">
          <ImgLazy classN="section-modal--img" src={src} alt={alt} />
        </div>
        <h3 className="section__modal--title">{name}</h3>
        <p className="section__modal--description">{description}</p>
        <a
          aria-label={`Leer más sobre ${name}`}
          className="section--link ul__li--a-dark modal-redirect"
          href={path}
        >
          <span>Leer más</span>
        </a>
      </section>
    </>,
    document.getElementById('modal'),
  );
}

export default SectionModal;
