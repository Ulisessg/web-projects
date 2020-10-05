module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: ['index.html', 'design-system.html', 'blog.html'],
    },
    settings: {
      chromeFlags: 'chrome-debug --no-sandbox',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
