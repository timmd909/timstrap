'use strict';

module.exports = function (grunt) {
  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass',
  ]);

  grunt.registerTask('default', ['build']);
};
