'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const cdnUrl = 'https://cdn.example.com/';

  const app = new EmberApp(defaults, {
    sourcemaps: {
      enabled: true,
      extensions: ['js'],
      sourceRoot: cdnUrl,
    },

    fingerprint: {
      prepend: cdnUrl,
    },
  });

  return app.toTree();
};
