const { join } = require('path');
const fs = require('fs');
const axios = require('axios');

async function getBlogs() {
  try {
    const blogs = await axios.default.get(
      'https://web-projects-api.ulisessg.vercel.app/api/blog/all-blogs',
    );

    return blogs;
  } catch (error) {
    return error;
  }
}

async function getInfos() {
  try {
    const infos = await axios.default.get(
      'https://web-projects-api.ulisessg.vercel.app/api/blog/all-info',
    );

    return infos;
  } catch (error) {
    return error;
  }
}

let blogs;
let infos;

const blogRequest = getBlogs().then((res) => {
  const { message } = res.data;
  blogs = message;
});

const infoRequest = getInfos().then((res) => {
  const { message } = res.data;

  infos = message;
});

Promise.all([blogRequest, infoRequest]).then(() => {
  let i = 0;

  blogs.map((blog) => {
    const basicTemplate = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${infos[i].metaDescription}" />
    <meta name="twitter:title" content="${infos[i].title}" />
    <meta name="twitter:description" content="${infos[i].metaDescription}" />
    <meta name="twitter:image" content="${infos[i].seoCardUrl}" />
    <meta property="og:title" content="${infos[i].title}" />
    <meta property="og:description" content="${infos[i].metaDescription}" />
    <meta property="og:image" content="${infos[i].seoCardUrl}" />
    <meta property="og:url" content="https://ulisessg.com/${infos[i].name}" />
    <title>${infos[i].title}</title>
  </head>
  <body>
    <main>
      ${blog.content}
    </main>
  </body>
</html>`;

    fs.writeFile(
      join(__dirname, 'dist', `${infos[i].name}.html`),
      basicTemplate,
      () => {
        console.log('Blog created');
      },
    );

    i++;
  });
});
