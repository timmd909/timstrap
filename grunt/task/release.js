'use strict';

require('colors');
const ROOT_DIR = __dirname + '/../../';
const simpleGit = require('simple-git/promise')(ROOT_DIR);

module.exports = function (grunt) {
  const PACKAGE_JSON = JSON.parse(grunt.file.read('package.json'));

  grunt.registerTask('release:commit', function () {
    var done = this.async();
    var commitMessage = 'Packaging release ' + PACKAGE_JSON.version;

    simpleGit.add('*')
      .then(() => simpleGit.commit(commitMessage))
      .then(() => done());
  });

  grunt.registerTask('release:tag', function () {
    var done = this.async();

    var version = PACKAGE_JSON.version;

    simpleGit.tag([version])
      .then(() => {
        grunt.log.writeln('Created tag: ' + version.green.bold);
        return simpleGit.push('origin', version);
      })
      .then(() => grunt.log.writeln('Pushed tag to origin'))
      .then(() => done());

    // all done,
  });

  grunt.registerTask('release', ['build', 'release:commit', 'release:tag']);
};
