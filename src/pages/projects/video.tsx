import React, { FunctionComponent } from 'react';
import Layout from '@/organisms/Layout';
import Head from '@/molecules/Head';
import VideoComponent from '@/atoms/Video';

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
        <>
          <main>
            <VideoComponent />
          </main>
        </>
      </Layout>
    </>
  );
};

export default Video;
