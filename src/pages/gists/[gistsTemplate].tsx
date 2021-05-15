/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Head from 'next/head';
import ReactGist from 'react-gist';
import axios from 'axios';
import GlobalStyles from '../../styles/GlobalStyles';
import Layout from '../../organisms/Layout';
import { GistsClassesStyles } from '../../styles/templates/GistsPagesStyles';
import LinkDarkNoBlank from '../../atoms/LinkDarkNoBlank';

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
      <GlobalStyles />
      <GistsClassesStyles />
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
