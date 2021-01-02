import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import '../../styles/organisms/mainBlog-styles.styl';

const MainBlog = ({ getBlogReducer }) => {
  const [blogInfo, setBlogInfo] = useState(null);
  let blogRequested = false;

  useEffect(() => {
    const query = getBlogReducer.query.split('=');

    window
      .fetch(
        `https://web-projects-api.ulisessg.vercel.app/api/blog?name=${query[1]}`,
      )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogInfo(data);
        blogRequested = true;
      })
      .catch((err) => {
        console.error(err);
      });
  }, [blogRequested]);

  const printBlog = () => {
    const PARSER = new DOMParser();

    const blogHtml = PARSER.parseFromString(
      blogInfo.message.content,
      'text/html',
    ).getElementById('blog');

    const father = document.getElementById('blogWrapper');
    father.append(blogHtml);
  };

  return (
    <>
      <main id='main'>
        <section className='blog-wrapper' id='blogWrapper'>
          {blogInfo ? printBlog() : <h1>Loading blog...</h1>}
        </section>
      </main>
    </>
  );
};

const mapStateToProps = ({ getBlogReducer }) => {
  return { getBlogReducer };
};

export default connect(mapStateToProps, {})(MainBlog);
