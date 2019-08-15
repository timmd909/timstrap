'use strict';

const sass = require('node-sass');
const _ = require('lodash');

const DEFAULT_OPTIONS = {
  implementation: sass,
  sourceMap: true,
  includePaths: [
    'node_modules/bootstrap/scss',
    'scss',
  ],
};

const MAIN_SOURCE = 'scss/timstrap.scss';

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
