/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import Link from '@/atoms/Link';
import {
  SectionContainer,
  ImageContainer,
  Title,
  Description,
} from './SectionStyles';
import { SectionProps } from '@/props';

const SectionNoModal: FunctionComponent<SectionProps> = (
  props: SectionProps
): JSX.Element => {
  return (
    <>
      <SectionContainer
        aria-labelledby={props.description}
        className='section--container'
        key={props.id}
      >
        <ImageContainer
          aria-label={props.image.alt}
          title={props.image.alt}
          className='section-img-container'
        >
          <img
            role='presentation'
            loading='lazy'
            className='section--img'
            src={props.image.src}
            alt=''
          />
        </ImageContainer>

        <Title id={props.path || props.name} className='section--title'>
          {props.title}
        </Title>

        <Description className='section--description'>
          {props.description}
        </Description>

        <Link
          href={props.path || props.name}
          text={`Ver más sobre ${props.title}`}
          background='backgroundLight'
          bgh='backgroundLight2'
          cn='some'
          ct='textDark'
          cth='textDark2'
          linkSize={props.linkSize}
          ariaLabel={props.loadingLabel}
        />
      </SectionContainer>
    </>
  );
};

export default SectionNoModal;
