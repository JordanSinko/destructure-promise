const exportBabelConfig = require('./babel.config');

module.exports = function(config) {
  config.set({
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: ['babel'],
    coverageAnalysis: 'off',
    mutate: ['src/**/*.js', '!src/**/__tests__/**/*.spec.js'],
    babel: {
      options: exportBabelConfig()
    }
  });
};
