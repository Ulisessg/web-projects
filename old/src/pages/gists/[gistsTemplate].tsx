import React from 'react';
import ReactGist from 'react-gist';
import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../organisms/Layout';
import { GistsClassesStyles } from '../../styles/templates/GistsPagesStyles';
import Link from '../../atoms/Link';
import Head from '../../molecules/Head';
import ShareMedia from '../../organisms/ShareMedia';

export const getStaticProps: GetStaticProps = async (context: any) => {
  const request: any = await axios.get(
    `https://web-projects-api.vercel.app/api/gist?name=${context.params.gistsTemplate}`
  );
  const data = request.data.message[0];

  return {
    props: {
      data,
      githubCode: data.githubLink.split('/')[4],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request: any = await axios.get(
    'https://web-projects-api.vercel.app/api/gist?limit=100'
  );
  const gists = request.data.message;

  const paths: any = [];

  gists.map((gistt: any) => paths.push(`/gists/${gistt.name}`));

  return {
    paths,
    fallback: false,
  };
};

function GistsTemplate({
  data,
  githubCode,
}: {
  data: any;
  githubCode: any;
}): JSX.Element {
  return (
    <>
      <GistsClassesStyles />
      <Head
        title={`${data.title} | UlisesSG FullStack Developer`}
        canonicalUrl={`/gists/${data.name}`}
        description={data.description}
        image={data.image}
        imageAlt={`Portada del gist: ${data.title}`}
        keywords={`${data.subjects}`}
        locale='es_MX'
        type='article'
      />
      <Layout>
        <main>
          <ShareMedia
            path={`/gists/${data.name}`}
            addLikePath='https://web-projects-api.vercel.app/api/gist/add-like'
            documentNameForLike={
              typeof window !== 'undefined' &&
              window.location.pathname.split('/')[2]
            }
          />
          <h1>{data.title}</h1>
          <section>
            <p>{data.description}</p>
          </section>
          <h2>Codigo</h2>
          <section id='code'>
            <ReactGist id={githubCode} file={undefined} />
          </section>
          <div
            style={{ width: '100%', display: 'grid', justifyItems: 'center' }}
          >
            <Link
              cn=''
              ariaLabel='Cargando página de gists'
              background='backgroundLight2'
              bgh='backgroundLight'
              ct='textDark'
              cth='textDark'
              linkSize='large'
              href='/gist'
              text='Ver más códigos'
            />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default GistsTemplate;
