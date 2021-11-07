import React from 'react';
import Styles404 from 'pagesStyles/404Styles';
import Layout from '@/organisms/Layout';
import Head from '@/molecules/Head';
import Link from '@/atoms/Link';

export default function Error(): JSX.Element {
  return (
    <>
      <Layout>
        <>
          <Head
            canonicalUrl='/404'
            description='Error 404'
            image='https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Fcovers%2F404%20page%20cover.png?alt=media&token=4419a307-e9d1-4f35-ae04-5c6dede44d9e'
            imageAlt='Error 404'
            keywords=''
            locale='es_MX'
            title='Error 404: Está página no existe o está en proceso de construcción'
            type='website'
          />
          <Styles404 id='main'>
            <h1 className='message' style={{ textAlign: 'center' }}>
              Página no encontrada o en proceso de construcción&nbsp;
              <span role='img' aria-label='emoji ingeniera'>
                👷‍♀️
              </span>
              <span role='img' aria-label='emoji señal de construcción'>
                🚧
              </span>
              <span role='img' aria-label='emoji ingeniero'>
                👷‍♂️
              </span>
              <Link
                cn=''
                ariaLabel={`Cargando`}
                background='backgroundLight'
                bgh='backgroundLight2'
                ct='textDark'
                cth='textDark'
                linkSize='small'
                href='/'
                text='Regresar al inicio'
              />
            </h1>
          </Styles404>
        </>
      </Layout>
    </>
  );
}
