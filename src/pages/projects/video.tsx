import React, { FunctionComponent } from 'react';
import Layout from '@/organisms/Layout';
import Head from '@/molecules/Head';

const Video: FunctionComponent = () => {
  return (
    <>
      <Head
        canonicalUrl='/projects/video'
        description='Video controller project'
        image=''
        imageAlt=''
        keywords=''
        locale='es_MX'
        title='Video controller'
        type='website'
      />
      <Layout>
        <h1>Hello!</h1>
      </Layout>
    </>
  );
};

export default Video;
