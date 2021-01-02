import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import '../../styles/organisms/mainBlog-styles.styl';

const MainBlog = () => {
  const [blogContent, setBlogContent] = useState(null);
  const [blogInfo, setBlogInfo] = useState(null);

  let blogRequested = false;
  let blogInfoRequested = false;

  const query = window.location.search.split('=')[1];
  const urlBlog = `https://web-projects-api.ulisessg.vercel.app/api/blog?name=${query}`;
  const urlBlogInfo = `https://web-projects-api.ulisessg.vercel.app/api/blog/info?name=${query}`;

  // Get blog
  useEffect(() => {
    window
      .fetch(urlBlog)
      .then((res) => {
        blogRequested = true;
        return res.json();
      })
      .then((data) => {
        setBlogContent(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [blogRequested]);

  // Get blog info
  useEffect(() => {
    window
      .fetch(urlBlogInfo)
      .then((res) => {
        blogInfoRequested = true;
        return res.json();
      })
      .then((data) => {
        setBlogInfo(data);
        console.log(blogInfo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [blogInfoRequested]);

  const printBlog = () => {
    const PARSER = new DOMParser();
    const father = document.getElementById('blogWrapper');

    if (blogContent.error) {
      const errorMessage = PARSER.parseFromString(
        '<h1>Blog not found 🕵️‍♀️</h1>',
        'text/html',
      ).querySelector('h1');
      father.append(errorMessage);
    } else {
      const blogHtml = PARSER.parseFromString(
        blogContent.message.content,
        'text/html',
      ).getElementById('blog');

      father.append(blogHtml);
    }
  };

  return (
    <>
      {/* SEO */}
      {blogInfo && (
        <Helmet>
          <meta name='description' content={blogInfo.message.metaDescription} />
          <meta name='twitter:title' content={blogInfo.message.title} />
          <meta
            name='twitter:description'
            content={blogInfo.message.metaDescription}
          />
          <meta name='twitter:image' content={blogInfo.message.seoCardUrl} />
          <meta property='og:title' content={blogInfo.message.title} />
          <meta
            property='og:description'
            content={blogInfo.message.metaDescription}
          />
          <meta property='og:image' content={blogInfo.message.seoCardUrl} />
          <meta
            property='og:url'
            content={`https://ulisessg.com/blog${window.location}`}
          />
          <title>{blogInfo.message.title}</title>
        </Helmet>
      )}

      {/* Content */}

      <main id='main'>
        <section className='blog-wrapper' id='blogWrapper'>
          {blogContent ? printBlog() : <h1>Loading blog...</h1>}
        </section>
      </main>
    </>
  );
};

export default connect(mapStateToProps, {})(MainBlog);
