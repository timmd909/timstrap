'use strict';

require('colors');
const ROOT_DIR = __dirname + '/../../';
const simpleGit = require('simple-git/promise')(ROOT_DIR);

module.exports = function (grunt) {
  grunt.registerTask('release:tag', function () {
    var done = this.async();

    var packageJson = JSON.parse(grunt.file.read('package.json'));
    var version = packageJson.version;

    simpleGit.tag([version])
      .then(() => {
        grunt.log.writeln('Created tag: ' + version.green.bold);
        return simpleGit.push('origin', version);
      })
      .then(() => grunt.log.writeln('Pushed tag to origin'))
      .then(() => done());

    // all done,
  });

  grunt.registerTask('release', ['build', 'release:tag']);
};
