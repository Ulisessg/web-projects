const { join } = require('path');
const fs = require('fs');
const axios = require('axios');

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

    <!-- PWA -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#052336" />
    <link
      rel="apple-touch-icon"
      href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Flogo.png?alt=media&token=65636b9b-0dcd-4845-b66a-56e2c5b762b0"
    />

    <!-- Basic SEO  -->
    <link rel="canonical" href="https://ulisessg.com/${blog.name}"/>
    <meta name="description" content="${blog.metaDescription}" />
    <meta name="keywords" content="${blog.metaSubjects}" />
    <meta name="author" content="UliseSG">

    <!-- Twitter SEO  -->
    <meta name="twitter:title" content="${blog.title}" />
    <meta name="twitter:description" content="${blog.metaDescription}" />
    <meta name="twitter:image" content="${blog.seoCardUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Ulises5G" />
    <meta name="twitter:creator" content="@Ulises5G" />
    <meta property="twitter:url" content="https://ulisessg.com/${blog.name}">

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
        <div id="blog">
          ${blog.content}
        </div>
      </section>
    </main>

    <!-- Footer -->

<footer class="footer" id="footer">
  <div class="footer__container">
    <img
      alt="Ulises Antonio Samano Galvan"
      src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888"
      class="footer--logo"
    />
    <h3 class="footer__quote">Si puedes imaginarlo puedes programarlo 💚</h3>

    <!-- Social media -->
    <h3 class="footer__quote follow-me">Sigueme en mis redes sociales</h3>

    <div class="footer__social">
      <a href="https://www.facebook.com/Ulises5G">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Ffacebook.png?alt=media&token=69833032-271c-4f43-a2d4-c621350b2e54"
          alt="Logo de Facebook"
          class="footer__social--logo"
        />
      </a>
      <a href="https://twitter.com/Ulises5G">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Ftwitter.png?alt=media&token=539518e5-e18b-4cc4-a41e-498b68caf60b"
          alt="Logo de twitter"
          class="footer__social--logo"
        />
      </a>
      <a href="https://github.com/Ulisessg">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FGitHub-logo.png?alt=media&token=f7d795cd-d7db-4b35-a2f4-0dca3070dd1b"
          alt="Logo de github"
          class="footer__social--logo"
        />
      </a>
    </div>

    <!-- <Linkedin Badge> -->

    <section class="linkedin-badge">
      <div class="linkedin-badge--background">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FSEO%2Fme.jfif?alt=media&token=6f3e9ef4-df67-462c-bba5-0d2bea0e2076"
          alt="Ulises Antonio Sámano Galván"
          class="linkedin-badge--image"
        />
      </div>
      <a
        class="linkedin-badge--name"
        href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge"
      >
        <h3>Ulises Antonio Sámano Galván</h3>
      </a>

      <p class="linkedin-badge--description">
        Frontend / Backend / Nerd / Student at Platzi Master.
      </p>
      <div class="linkedin-badge--go-profile">
        <a href="https://mx.linkedin.com/in/ulisessg?trk=profile-badge">
          Ver perfil
        </a>
      </div>
      <img
        class="linkedin-logo"
        alt="Linkedin Logo"
        src="https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png"
      />
    </section>

    <!-- </ Linkedin Badge> -->

    <div class="footer__other-links">
      <nav class="nav">
        <ul class="nav__ul--column" id="secciones">
          <li class="ul__li">
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Mi perfil de Platzi"
                class="ul__li--a ul__li--a-dark"
                href="https://platzi.com/p/UlisesSG/"
              >
                Perfil de platzi
              </a>
            </p>
          </li>

          <li class="ul__li">
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Curriculum"
                class="ul__li--a ul__li--a-dark"
                href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FFullstack%20React%20Developer%20-%20Ulises%20Antonio%20Samano%20Galvan.pdf?alt=media&token=a5cac99c-1cb9-4e9b-908d-f84eb6089b36"
              >
                Curriculum
              </a>
            </p>
          </li>

          <li class="ul__li">
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Perfil de Hacker Rank"
                class="ul__li--a ul__li--a-dark"
                href="https://www.hackerrank.com/ukisessg"
              >
                HackerRank
              </a>
            </p>
          </li>
        </ul>
      </nav>
    </div>

    <h3 class="footer__quote coffe-quote">
      Hecho con amor, café y amor al café 💚
    </h3>
  </div>
</footer>


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

  //  Build sitemap.xml

  let XMLSitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
<loc>https://ulisessg.com</loc>
</url>
<url>
<loc>https://ulisessg.com/blog</loc>
</url>
`;

  const sites = blogs.map((blog) => {
    const site = `<url>
      <loc>https://ulisessg.com/${blog.name}</loc>
    </url>`;

    return site;
  });

  XMLSitemap = `${XMLSitemap} ${sites.join('\n')}\n</urlset>`;

  fs.writeFileSync(join(__dirname, 'dist', 'sitemap.xml'), XMLSitemap, {
    encoding: 'utf-8',
  });
});
