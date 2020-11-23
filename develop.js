const { exec } = require('child_process');

const chalk = require('chalk');

const FILE = process.argv[2];

console.log(chalk.bgMagenta.bold(`webpack is serve ${FILE} page`));

exec(
  `FILE=${FILE}.js webpack serve --progress --color --config ./webpack.dev.js`,
);
