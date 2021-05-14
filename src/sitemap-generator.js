/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

function getFiles(path = '.') {
  const files = readdirSync(join(__dirname, 'out', path), {
    encoding: 'utf-8',
  }).filter((file) => {
    const fileParts = file.split('.');

    const extension = fileParts[1];

    if (extension === 'html' && fileParts[0] !== '404') {
      return fileParts[0];
    }
  });

  const filesNoExtension = files.map((file) => {
    const fileParts = file.split('.');

    if (fileParts[0] === 'index') {
      return '';
    }

    return fileParts[0];
  });

  return filesNoExtension;
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

const FullXML = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${rootPats.join('\n')}\n
${englishPahts.join('\n')}\n
</urlset>`;

writeFileSync(join(__dirname, 'out', 'sitemap.xml'), FullXML, {
  encoding: 'utf-8',
});

process.stdout.write('Sitemap generated');
