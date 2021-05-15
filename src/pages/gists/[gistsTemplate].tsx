/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Head from 'next/head';
import ReactGist from 'react-gist';
import axios from 'axios';
import Layout from '../../organisms/Layout';
import { GistsClassesStyles } from '../../styles/templates/GistsPagesStyles';
import LinkDarkNoBlank from '../../atoms/LinkDarkNoBlank';

/**
 *
 * Cannonical url /gists/${data.name}
 *
 * Description {data.description}
 *
 *  Keywords content={data.subjects}
 *
 * Twitter title content={data.title}
 */
/* <title>
  {`${data.title} | UlisesSG FullStack Developer`}
</title> */

export async function getStaticProps(context) {
  const request = await axios.get(`https://web-projects-api.vercel.app/api/gist?name=${context.params.gistsTemplate}`);

  const data = request.data.message[0];

  return {
    props: {
      data,
      githubCode: data.githubLink.split('/')[4],

    },
  };
}

export async function getStaticPaths() {
  const request = await axios.get('https://web-projects-api.vercel.app/api/gist?limit=100');
  const gists = request.data.message;

  const paths = [];

  gists.map((gistt: any) => paths.push(`/gists/${gistt.name}`));

  return {
    paths,
    fallback: false,
  };
}

function GistsTemplate({ data, githubCode }: { data: any; githubCode: any; }): JSX.Element {
  return (
    <>
      <GistsClassesStyles />

      <Head>

        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
          type="image/png"
        />
      </Head>
      <Layout>
        <main>
          <h1>{data.title}</h1>

          <section>
            <p>
              {data.description}
            </p>
          </section>
          <h2>Codigo</h2>
          <section id="code">
            <ReactGist id={githubCode} file={null} />
          </section>
          <LinkDarkNoBlank path="/gist" text="Ver más códigos" label="Ver más códigos" />

        </main>
      </Layout>
    </>
  );
}

export default GistsTemplate;
