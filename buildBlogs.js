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
  //CSS hash
  const min = 205;
  const max = 1;
  const hash1 = Math.floor(Math.random() * (max - min)) + min;
  const hash2 = Math.floor(Math.random() * (max - min)) + min;
  const cssName = `blog.${hash1}.${hash2}.css`;

  // Write css
  fs.copyFile(
    join(__dirname, 'src', 'styles', 'blog.css'),
    join(__dirname, 'dist', 'css', cssName),
    () => {
      console.log('CSS copied');
    },
  );

  //Iterator
  let i = 0;

  blogs.map((blog) => {
    const basicTemplate = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="canonical" href="${infos[i].name}"/>
    <meta name="description" content="${infos[i].metaDescription}" />

    <!-- Twitter SEO  -->
    <meta name="twitter:title" content="${infos[i].title}" />
    <meta name="twitter:description" content="${infos[i].metaDescription}" />
    <meta name="twitter:image" content="${infos[i].seoCardUrl}" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@Ulises5G">
    <meta name="twitter:creator" content="@Ulises5G">

    <!-- OG SEO -->
    <meta property="og:site_name" content="UlisesDev" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${infos[i].title}" />
    <meta property="og:description" content="${infos[i].metaDescription}" />
    <meta property="og:image" content="${infos[i].seoCardUrl}" />
    <meta property="og:url" content="https://ulisessg.com/${infos[i].name}" />

    <link rel="stylesheet" type="text/css" href="/css/${cssName}" />
    <title>${infos[i].title}</title>
  </head>
  <body>
    <!-- Skip link -->
    <div class="skip-link"><span class="skip-link--p"><a aria-label="Contenido principal" class="skip-link--link" href="#main">Contenido principal</a></span><span class="skip-link--p"><a aria-label="Otras páginas" class="skip-link--link" href="#secciones">Otras páginas</a></span></div>

    <!-- Layout -->
    <header class="header">
      <nav class="header__nav"><p>Ulises Dev</p></nav>
    </header>
    <main>
      ${blog.content}
    </main>
    <footer>
      <a class="footer--link" href="mailto:ukisessg@gmail.com" aria-label="Email: ukisessg@gmail.com" title="Email: ukisessg@gmail.com">Email: ukisessg@gmail.com</a>
    </footer>
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
