/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

function getFiles(path = '.') {
  const files = readdirSync(join(__dirname, '..', 'out', path), {
    encoding: 'utf-8',
  }).filter((file) => {
    const fileParts = file.split('.');

    const extension = fileParts[1];

    if (extension === 'html' && fileParts[0] !== '404') {
      return fileParts[0];
    }
  });

  // Delete .html extension
  const filesWithNoExtension = files.map((file) => {
    const fileParts = file.split('.');

    if (fileParts[0] === 'index') {
      return '';
    }

    return fileParts[0];
  });

  return filesWithNoExtension;
}

function createSitemap(sitemapPaths, outPath) {
  const FullXML = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapPaths.join('\n')}\n
</urlset>`;

  writeFileSync(join(__dirname, '..', 'out', outPath, 'sitemap.xml'), FullXML, {
    encoding: 'utf-8',
  });
}

const rootPats = getFiles('.').map((path) => {
  if (path === '') {
    return `<url>
    <loc>https://ulisessg.com</loc>
    </url>`;
  }
  return `<url>
  <loc>https://ulisessg.com/${path}</loc>
  </url>`;
});

const englishPahts = getFiles('en').map((path) => {
  if (path === '') {
    return `<url>
    <loc>https://ulisessg.com/en</loc>
    </url>`;
  }
  return `<url>
  <loc>https://ulisessg.com/en/${path}</loc>
  </url>`;
});

const gistsPahts = getFiles('gists').map((path) => `<url>
  <loc>https://ulisessg.com/gists/${path}</loc>
  </url>`);

createSitemap(rootPats, '');
createSitemap(englishPahts, 'en');
createSitemap(gistsPahts, 'gists');

process.stdout.write('Sitemaps generated');
