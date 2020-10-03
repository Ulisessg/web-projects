const url = 'http://localhost:2001';

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run server',
      url: [`${url}`, `${url}/design-system.html`, `${url}/blog.html`],
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
