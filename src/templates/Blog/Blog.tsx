import React, { FunctionComponent } from 'react';
import SectionContainer from '@/molecules/SectionContainer';
import Section from '@/organisms/Section';
import H2 from '@/atoms/H2';
import { BlogContainer } from './BlogStyles';
import otherBlogs from '../../states/blogsState';
import { BlogProps } from '@/props';

const Blog: FunctionComponent<BlogProps> = (props: BlogProps): JSX.Element => {
  return (
    <>
      <BlogContainer aria-label='Mis posts publicados'>
        <div>
          {props.isPageOrSection === 'page' ? (
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
              Ultimos posts
            </h1>
          ) : (
            <H2
              style={{ textAlign: 'center', marginTop: '50px' }}
              text='Ultimos posts'
            />
          )}
          <div id='posts'>
            <section className='sections'>
              <SectionContainer>
                {props.blogEntries.map((blog) => (
                  <Section
                    linkSize='large'
                    loadingLabel='Cargando blog'
                    id={blog.name}
                    image={blog.image}
                    name={blog.name}
                    title={blog.title}
                    key={blog.name}
                    path={blog.path}
                    description={blog.description}
                  />
                ))}
              </SectionContainer>
            </section>
          </div>

          <H2 text='Otros posts' />
          <div id='posts'>
            <section className='sections'>
              <SectionContainer>
                {otherBlogs.map((blog) => (
                  <Section
                    linkSize='large'
                    loadingLabel='Cargando blog'
                    id={blog.name}
                    image={blog.image}
                    name={blog.name}
                    title={blog.title}
                    key={blog.name}
                    path={blog.path}
                    description={blog.description}
                  />
                ))}
              </SectionContainer>
            </section>
          </div>
        </div>
      </BlogContainer>
    </>
  );
};

export default Blog;
