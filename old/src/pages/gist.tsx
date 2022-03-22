import React from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import GetGists from '../utils/getGists';
import TransformGistsResponse from '../utils/transformGistsResponse';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';

const Head = dynamic(() => import('../molecules/Head'), { ssr: true });
const Layout = dynamic(() => import('../organisms/Layout'), { ssr: true });
const Gists = dynamic(() => import('../templates/Gists'), { ssr: true });

export default function Gist({
  gistsInfo,
}: {
  gistsInfo: Array<SectionProps>;
}): JSX.Element {
  return (
    <>
      <Head
        title='Gists - Aprende buenas prácticas y recomendaciones con pequeñas piezas de  código | UlisesSG FullStack Developer'
        description='Aprende buenas prácticas de código, algoritmos, tips de programación y recomendaciones con pequeñas piezas de código, aprende sobre optimización, algoritmos, uso de APIS Frontend, funcionalidades de Python y hacks de JavaScript y React.'
        keywords='React, algoritmos, gists, frontend tips, tips de programación, optimización'
        image='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fcovers%2FGists%20portada.png?alt=media&token=fd9fef77-6eb8-4a53-9aea-67b61c2c75f0'
        type='website'
        locale='es_MX'
        canonicalUrl='/gist'
        imageAlt='Portada Gists page - Ulises SG'
      />
      <Layout>
        <main role='main'>
          <Gists isPageOrSection='page' gists={gistsInfo} />
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const gists = await GetGists();
  const gistsInfo = TransformGistsResponse(gists.data);

  return {
    props: { gistsInfo },
  };
};
