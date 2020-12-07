//@ts-check
const { readdir } = require('fs');
const { join } = require('path');

let directiories;

readdir(join(__dirname, 'public'), { encoding: 'utf-8' }, (err, files) => {
  if (err) throw err;
  directiories = files;
});

module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: directiories,
      numberOfRuns: 10,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
