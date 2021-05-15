const { copyFileSync } = require('fs');
const { join } = require('path');

copyFileSync(join(__dirname, '..', 'pwa', 'manifest.json'), join(__dirname, '..', 'out', 'manifest.json'));

process.stdout.write('Maifest generated');
