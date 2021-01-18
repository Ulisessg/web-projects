import React, { useEffect, useState } from 'react';
import '../../styles/organisms/mainBlog-styles.styl';

function MainBlog(): JSX.Element {
  const [blogContent, setBlogContent] = useState(null);

  let blogRequested = false;

  const query = window.location.search.split('=')[1];
  const urlBlog = `https://web-projects-api.ulisessg.vercel.app/api/blog?name=${query}`;

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

  function printBlog(): any {
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
  }

  return (
    <>
      {/* Content */}

      <main id='main'>
        <section className='blog-wrapper' id='blogWrapper'>
          {blogContent && printBlog()}
        </section>
      </main>
    </>
  );
}

export default MainBlog;
