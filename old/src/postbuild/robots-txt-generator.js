const { writeFileSync } = require('fs');
const { join } = require('path');

writeFileSync(
  join(__dirname, '..', 'out', 'robots.txt'),
  `User-Agent: *
Allow: /
Allow: /en/*
Allow: /gists/*

Sitemap: https://ulisessg.com/sitemap.xml
  `,
);

process.stdout.write('robots.txt generated');
