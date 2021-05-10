module.exports = function englishBlogTemplate(blog, cssName, jsName) {
  const template = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <!-- PWA -->
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#052336" />
      <link
        rel="apple-touch-icon"
        href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
      />

      <!-- Facebook comments plugin -->

      <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v10.0" nonce="h8ZjI4Zv"></script>

    <!-- End Facebook comments plugin -->

      <!-- Facebook Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1205494516547352');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" style="display:none"
         src="https://www.facebook.com/tr?id=1205494516547352&ev=PageView&noscript=1"/>
  </noscript>
  <!-- End Facebook Pixel Code -->

      <!-- Basic SEO  -->
      <link rel="canonical" href="https://ulisessg.com/en/${blog.name}"/>
      <meta name="description" content="${blog.metaDescription}" />
      <meta name="keywords" content="${blog.metaSubjects}" />
      <meta name="author" content="Ulises Antonio Samano Galvan" />

      <!-- Twitter SEO  -->
      <meta name="twitter:title" content="${blog.title}" />
      <meta name="twitter:description" content="${blog.metaDescription}" />
      <meta name="twitter:image" content="${blog.seoCardUrl}" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Ulises5G" />
      <meta name="twitter:creator" content="@Ulises5G" />
      <meta property="twitter:url" content="https://ulisessg.com/en/${blog.name}">

      <!-- OG SEO -->
      <meta property="og:site_name" content="UlisesDev" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${blog.title}" />
      <meta property="og:description" content="${blog.metaDescription}" />
      <meta property="og:image" content="${blog.seoCardUrl}" />
      <meta property="og:url" content="https://ulisessg.com/en/${blog.name}" />

      <!-- SEO end  -->

      <link
      rel="icon"
      href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FLogo-favicon.png?alt=media&token=60a872bd-af09-47dd-a5cc-66e5a5b3ab51"
      type="image/png"
    />

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
        <a className="header__logo--link" href="/">
          <img
            class="header__logo--img"
            alt="Logo"
            src="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2Flogo-192x192.png?alt=media&token=1a4aa1ca-1846-41b3-9005-9c4dc5c4d888"
          />
        </a>
        <nav class="nav">
          <ul class="nav__ul">
            <!-- Links -->
            <li class="ul__li">
              <p>
                <a aria-label="Sobre mí" class="ul__li--a ul__li--a-dark" href="/">About</a>
              </p>
            </li>

            <li class="ul__li">
              <p>
                <a
                  aria-label="Blog sobre tecnología"
                  class="ul__li--a ul__li--a-dark"
                  href="/blog"
                  >Blog</a
                >
              </p>
            </li>

            <li class="ul__li">
              <p>
                <a aria-label="Mi cuenta en GitHub" class="ul__li--a ul__li--a-dark" href="https://github.com/Ulisessg"
                  >GitHub</a
                >
              </p>
            </li>
            <li class="ul__li">
              <p>
                <a aria-label="Piezas de código que comparto" class="ul__li--a ul__li--a-dark" href="/gist"
                  >Gists</a
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

      <!-- Facebook comments plugin -->

      <div style="display: flex;justify-content: center">

        <div class="fb-comments" data-href="https://ulisessg.com/${blog.name}" data-width="" data-numposts="5"></div>

      </div>

      <!-- End Facebook comments plugin -->
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
                  href="https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2Fv2%2FFullstack%20React%20Developer%20-%20Ulises%20Antonio%20Samano%20Galvan.pdf?alt=media&token=a4b86dfa-b4ef-4f63-be7e-50e39d1970b6"
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


    <script src="/js/${jsName}"></script>

    </body>
  </html>`;

  return template;
};
