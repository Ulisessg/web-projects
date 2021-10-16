import React from 'react';
import Script from 'next/script';

function AddBlogVisit(): JSX.Element {
  return (
    <>
      <Script strategy='lazyOnload' id='add_blog_visit'>
        {`'use strict';

var urlLength = window.location.pathname.split('/').length;

var blog = window.location.pathname.split('/')[urlLength - 1];

var raw = JSON.stringify({ blog_name: blog });

var request = new XMLHttpRequest();

request.open('POST', 'https://web-projects-api.vercel.app/api/blog/add-visit', true);

request.send(raw);`}
      </Script>
    </>
  );
}

export default AddBlogVisit;
