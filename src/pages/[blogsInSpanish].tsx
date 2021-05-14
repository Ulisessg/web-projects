/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React from 'react';

export async function getStaticProps(context) {
  const blog = context.params.blogsInSpanish;

  const request = await axios.get(`https://web-projects-api.vercel.app/api/blog/?name=${blog}`);

  const data = request.data.message;

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const request: any = await axios.get('https://web-projects-api.vercel.app/api/blog/all-blogs');

  const paths = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request.data.message.filter((blog: {
    metaSubjects: Array<any | string>;
    name: string;
    description: string;
    image: string;
    id: number;
    path: string;
    title: string;
    language?: 'en' | 'es';
  }) => {
    if (blog.language === 'es') {
      paths.push({ params: { blogsInSpanish: blog.name } });
    }
  });

  // { params: { blogsInSpanish: blog.name } }

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ data }: { data: any; }) {
  return (
    <>
      <div>
        {data.content}
      </div>
    </>
  );
}
