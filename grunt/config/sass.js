'use strict';

const sass = require('node-sass');
const _ = require('lodash');

const DEFAULT_OPTIONS = {
  implementation: sass,
  sourceMap: false,
  includePaths: [
    'node_modules/bootstrap/scss',
    'src/scss',
  ],
};

const MAIN_SOURCE = 'src/scss/timstrap.scss';

module.exports = {
  options: DEFAULT_OPTIONS,
  dist: {
    options: _.defaults({
      'outputStyle': 'compressed',
    }, DEFAULT_OPTIONS),
    files: {
      'dist/css/bootstrap.css': MAIN_SOURCE,
    },
  },
  debug: {
    options: _.defaults({
      'outputStyle': 'nested',
    }, DEFAULT_OPTIONS),
    files: {
      'dist/css/bootstrap.debug.css': MAIN_SOURCE,
    },
  },
};
