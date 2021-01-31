//  @ts-check

const { readdirSync } = require('fs');
const { join } = require('path');

const directiories = readdirSync(join(__dirname, 'public'), {
  encoding: 'utf-8',
});

module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: directiories,
      numberOfRuns: 5,
    },
    assert: {
      assertions: {
        //  Temporally downgraded
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
