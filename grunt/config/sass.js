'use strict';

const sass = require('node-sass');

module.exports = {
  options: {
    implementation: sass,
    sourceMap: true,
    includePaths: [
      'node_modules/bootstrap/scss',
      'src/scss',
    ],
  },
  dist: {
    files: {
      'dist/css/timstrap.css': 'src/scss/timstrap.css',
    },
  },
};
