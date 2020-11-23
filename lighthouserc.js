module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['about.html', 'design.html', 'blog.html'],
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
