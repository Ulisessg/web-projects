import React from 'react';
import Head from '../molecules/Head';
import DesignTemplate from '../templates/Design';

export default function Design(): JSX.Element {
  return (
    <>
      <Head
        locale="es_MX"
        type="website"
        title="Sistema de diseño | UlisesSG"
        keywords="design system, sistema de diseño, atomic design"
        imageAlt="Sistema de diseño, portada"
        description="Sistema de diseño de Ulises Antonio"
        canonicalUrl="/design"
        image="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fcovers%2FDesign%20system%20cover.png?alt=media&token=3da200c4-3cd7-452c-a3ae-3ea2d9c9c3ab"
      />
      <DesignTemplate />
    </>
  );
}
