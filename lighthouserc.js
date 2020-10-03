const url = 'http://localhost:2001';

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run server',
      url: [`${url}`],
    },
    settings: {
      chromeFlags: 'chrome-debug --no-sandbox',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
