const { exec } = require('child_process');

const chalk = require('chalk');

const FILE = process.argv[2];

const devFile = exec(
  `FILE=${FILE}.js webpack serve --progress --color --config ./webpack.dev.js`,
);

devFile.stdout.on('data', (data) => {
  console.log(chalk.bold(data));
});
