import React, { FunctionComponent } from 'react';
import RoundedImage from '../atoms/RoundedImage';
import BlogAuthorCardStyles from '../styles/molecules/BlogAuthorCardStyles';

const width = '80px';

const BlogAuthorCard:
  FunctionComponent<{ publishDate: string; }> = ({ publishDate }: { publishDate: string; }) => (
    <>
      <BlogAuthorCardStyles>
        <RoundedImage alt="Ulises Samano - Autora" src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FUlises%20Antonio%20Samano%20Galvan.jpg?alt=media&token=67d05c1b-f0c5-49df-9138-59a68072e9f4" widthDesktop={width} widthMobile="60px" widthTablet={width} widthLaptop={width} />
        <p>
          Creado por&nbsp;
          <strong>Ulises Samano</strong>
        </p>
        <p>{publishDate}</p>

        <section className="blog-author-card">
          <a target="_blank" className="blog-author-card-images-link" href="https://twitter.com/Ulises5G" rel="noreferrer">
            <img className="blog-author-card-images-image" src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogos%2FTwitter%20logo.png?alt=media&token=033e4048-5552-404c-89d3-8fa5f61b3a3d" alt="Twitter link" />
          </a>
          <a target="_blank" className="blog-author-card-images-link" href="https://www.facebook.com/Ulises5G" rel="noreferrer">
            <img className="blog-author-card-images-image" src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogos%2FLinkedIn%20logo.png?alt=media&token=bfee32b9-d481-4d63-acd0-220419bfa5c2" alt="Facebook link" />
          </a>
          <a target="_blank" className="blog-author-card-images-link" href="https://www.linkedin.com/in/ulisessg/" rel="noreferrer">
            <img className="blog-author-card-images-image" src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogos%2FFacebook%20logo.png?alt=media&token=416aa6f2-8347-4da2-b3bb-1c9569abd3f6" alt="LinkedIn link" />
          </a>
        </section>
      </BlogAuthorCardStyles>
    </>
  );

export default BlogAuthorCard;
