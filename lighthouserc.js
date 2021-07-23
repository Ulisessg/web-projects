//  @ts-check

module.exports = {
  ci: {
    collect: {
      staticDistDir: './src/out',
      url: ['index.html', 'blog.html', 'gist.html'],
      numberOfRuns: 5,
    },
    assert: {
      assertions: {
        //  Temporally downgraded
        'categories:performance': ['error', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
