import React from 'react';
import SectionContainer from '../styles/molecules/SectionContainer';
import SectionNoModal from '../organisms/SectionNoModal';
import SectionProps from '../interfaces_and_types/organisms/SectionProps';

function Blog({ blogEntries, isPageOrSection }:
  { blogEntries: Array<SectionProps>; isPageOrSection: 'page' | 'section'; }): JSX.Element {
  return (
    <>
      <div style={{ margin: '0 auto', width: '90vw' }}>
        <div>
          {isPageOrSection === 'page' ? (
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
              Ultimos posts:
            </h1>
          ) : (
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
              Ultimos posts:
            </h2>
          )}
          <div id="posts">
            <section className="sections">

              <SectionContainer>

                {blogEntries.map((blog) => (
                  <SectionNoModal
                    id={blog.name}
                    image={blog.image}
                    name={blog.name}
                    title={blog.title}
                    key={blog.name}
                    description={blog.description}
                  />
                ))}
              </SectionContainer>

            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
