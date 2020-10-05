module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['index.html', 'design-system.html', 'blog.html'],
      numberOfRuns: 10,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.99 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
