/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */
const { join } = require('path');
const fs = require('fs');
const axios = require('axios');
const spanishTemplate = require('./utils/SpanishBlogTemplate');
const englishTemplate = require('./utils/EnglishBlogTemplate');

async function getBlogs() {
  try {
    const blogs = await axios.default.get(
      'https://web-projects-api.vercel.app/api/blog/all-blogs',
    );

    return blogs;
  } catch (error) {
    return error;
  }
}

let blogs;

const blogRequest = getBlogs().then((res) => {
  const { message } = res.data;
  blogs = message;
});

Promise.all([blogRequest]).then(() => {
  //  CSS hash
  const min = 205;
  const max = 1;
  const hash1 = Math.floor(Math.random() * (max - min)) + min;
  const hash2 = Math.floor(Math.random() * (max - min)) + min;
  const cssName = `blog.${hash1}.${hash2}.css`;
  const jsName = `blog.${hash1}.${hash2}.js`;

  fs.mkdirSync(join(__dirname, 'dist', 'css'), { recursive: true });
  fs.mkdirSync(join(__dirname, 'dist', 'js'), { recursive: true });

  // English blogs folder
  fs.mkdirSync(join(__dirname, 'dist', 'en'), { recursive: true });

  // Write css
  fs.copyFileSync(
    join(__dirname, 'src', 'styles', 'blog.css'),
    join(__dirname, 'dist', 'css', cssName),
  );

  //  Js file

  fs.copyFileSync(
    join(__dirname, 'src', 'react', 'utils', 'add_visit.js'),
    join(__dirname, 'dist', 'js', jsName),
  );

  // robots.txt

  fs.writeFileSync(
    join(__dirname, 'dist', 'robots.txt'),
    `User-Agent: *
Allow: /
Allow: /en

Sitemap: https://ulisessg.com/sitemap.xml
    `,
  );

  //  Iterator

  blogs.map((blog) => {
    let directory;

    if (blog.language === 'es') {
      directory = join(__dirname, 'dist', `${blog.name}.html`);

      fs.writeFileSync(directory, spanishTemplate(blog, cssName, jsName));
    } else if (blog.language === 'en') {
      directory = join(__dirname, 'dist', 'en', `${blog.name}.html`);

      fs.writeFileSync(directory, englishTemplate(blog, cssName, jsName));
    }
  });

  //  Build sitemap.xml

  let XMLSitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
<loc>https://ulisessg.com</loc>
</url>
<url>
<loc>https://ulisessg.com/blog</loc>
</url>
<url>
<loc>https://ulisessg.com/gist</loc>
</url>
<url>
<loc>https://ulisessg.com/design</loc>
</url>
`;

  const sites = blogs.map((blog) => {
    let site;

    if (blog.language === 'es') {
      site = `<url>
      <loc>https://ulisessg.com/${blog.name}</loc>
    </url>`;
    } else if (blog.language === 'en') {
      site = `<url>
      <loc>https://ulisessg.com/en/${blog.name}</loc>
    </url>`;
    }

    return site;
  });

  XMLSitemap = `${XMLSitemap} ${sites.join('\n')}\n</urlset>`;

  fs.writeFileSync(join(__dirname, 'dist', 'sitemap.xml'), XMLSitemap, {
    encoding: 'utf-8',
  });
});
