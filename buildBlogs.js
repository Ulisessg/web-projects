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

  // Write css
  fs.copyFileSync(
    join(__dirname, 'src', 'styles', 'blog.css'),
    join(__dirname, 'dist', 'css', cssName),
  );

  //  Js file

  fs.copyFileSync(
    join(__dirname, 'src', 'react', 'atoms', 'add_visit.js'),
    join(__dirname, 'dist', 'js', jsName),
  );

  // robots.txt

  fs.writeFileSync(
    join(__dirname, 'dist', 'robots.txt'),
    `User-Agent: *
Allow: /
    `,
  );

  //  Iterator
  let i = 0;

  blogs.map((blog) => {
    const basicTemplate = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Basic SEO  -->   
    <link rel="canonical" href="https://ulisessg.com/${blog.name}"/>
    <meta name="description" content="${blog.metaDescription}" />
    <meta name="keywords" content="${blog.metaSubjects}" />

    <!-- Twitter SEO  -->
    <meta name="twitter:title" content="${blog.title}" />
    <meta name="twitter:description" content="${blog.metaDescription}" />
    <meta name="twitter:image" content="${blog.seoCardUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Ulises5G" />
    <meta name="twitter:creator" content="@Ulises5G" />

    <!-- OG SEO -->
    <meta property="og:site_name" content="UlisesDev" />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${blog.title}" />
    <meta property="og:description" content="${blog.metaDescription}" />
    <meta property="og:image" content="${blog.seoCardUrl}" />
    <meta property="og:url" content="https://ulisessg.com/${blog.name}" />

    <!-- SEO end  -->

    <link rel="icon" type="image/png" href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Flogo.png?alt=media&token=65636b9b-0dcd-4845-b66a-56e2c5b762b0" />

    <link rel="stylesheet" type="text/css" href="/css/${cssName}" />

    <!-- LinkedIn badge -->
    <script
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    ></script>
    <title>${blog.title} | UlisesSG</title>
  </head>
  <body>
    <!--Skip Link-->
    <div class="skip-link">
      <span class="skip-link--p">
        <a
          aria-label="Contenido principal"
          class="skip-link--link"
          href="#main"
        >
          Contenido principal
        </a>
      </span>
      <span class="skip-link--p">
        <a aria-label="Otras páginas" class="skip-link--link" href="#secciones">
          Otras páginas
        </a>
      </span>
    </div>

    <!-- Header -->
    <header class="header">
      <nav class="header__nav">
        <ul class="header__ul" id="secciones">
          <!-- Links -->
          <li class="ul__li">
            <p>
              <a aria-label="Sobre mí" class="ul__li--a" href="/">About</a>
            </p>
          </li>
          <li class="ul__li">
            <p>
              <a
                aria-label="Blog sobre tecnología"
                class="ul__li--a"
                href="/blog"
                >Blog</a
              >
            </p>
          </li>
          <li class="ul__li">
            <p>
              <a aria-label="Sistema de diseño" class="ul__li--a" href="/design"
                >Sistema</a
              >
            </p>
          </li>
        </ul>
      </nav>
    </header>

    <main id="main">
      <section class="blog-wrapper" id="blogWraper">
        ${blog.content}
      </section>
    </main>

    <footer class="footer">
      <div>
        <nav>
          <ul class="header__ul" id="secciones">
            <!-- Links -->
            <li class="ul__li">
              <p>
                <a
                  aria-label="Mi Twitter"
                  class="ul__li--a"
                  href="https://twitter.com/Ulises5G"
                  >Twitter</a
                >
              </p>
            </li>
            <li class="ul__li">
              <p>
                <a
                  aria-label="Mi perfil de platzi"
                  class="ul__li--a"
                  href="https://platzi.com/p/UlisesSG/"
                  >Perfil de platzi</a
                >
              </p>
            </li>
            <li class="ul__li">
              <p>
                <a
                  aria-label="Mi LinkedIn"
                  class="ul__li--a"
                  href="https://www.linkedin.com/in/ulisessg/"
                  >LinkedIn</a
                >
              </p>
            </li>
            <li class="ul__li">
              <p>
                <a
                  aria-label="Mi repositorio de GitHub"
                  class="ul__li--a"
                  href="https://github.com/Ulisessg"
                  >GitHub</a
                >
              </p>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="es_ES"
        data-type="vertical"
        data-theme="light"
        data-vanity="ulisessg"
      >
        <a
          class="LI-simple-link"
          href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge"
        >
          Ulises Antonio Sámano Galván
        </a>
      </div>
    </footer>

    <script
      type="text/javascript"
      src="/js/${jsName}"
      async
      defer
    ></script>

  </body>
</html>`;

    fs.writeFileSync(
      join(__dirname, 'dist', `${blog.name}.html`),
      basicTemplate,
      () => {
        console.log('Blog created');
      },
    );

    i += 1;
  });
});
