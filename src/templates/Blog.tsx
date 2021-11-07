import React from 'react';
import SectionContainer from '../styles/molecules/SectionContainer';
import Section from '../organisms/Section';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';
import H2 from '../atoms/H2';
import otherBlogs from '../states/blogsState';
import { BlogContainer } from '../styles/templates/BlogStyles';

function Blog({
  blogEntries,
  isPageOrSection,
}: {
  blogEntries: Array<SectionProps>;
  isPageOrSection: 'page' | 'section';
}): JSX.Element {
  return (
    <>
      <BlogContainer aria-label='Mis posts publicados'>
        <div>
          {isPageOrSection === 'page' ? (
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
                {blogEntries.map((blog) => (
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
}

export default Blog;
