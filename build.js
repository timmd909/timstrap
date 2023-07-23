require('colors');

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const vfs = require('vinyl-fs');
const sass = require('sass');

const BUILD_DIR = path.join(process.cwd(), 'dist');
const OUTPUT_COMPRESSED = path.join(BUILD_DIR, 'css/bootstrap.css');
const OUTPUT_DEBUG = path.join(BUILD_DIR, 'css/bootstrap.debug.css');

function cleanDist() {
  console.log(`Cleaning out dist/`);
  rimraf.sync(BUILD_DIR);
  mkdirp.sync(path.join(BUILD_DIR, 'css'));
}

function copyAssets() {
  console.log(`Copying assets`);
  vfs
    .src(path.join(process.cwd(), 'node_modules/bootstrap/dist/js/*'))
    .pipe(vfs.dest(path.join(BUILD_DIR, 'js')));
}

function buildSass() {
  console.log(`Building stylesheets`);
  let sassOpts = {
    loadPaths: [
      path.join(process.cwd(), 'node_modules'),
    ],
    style: 'compressed',
  };
  const compressedResult = sass.compile('scss/timstrap.scss', sassOpts);

  sassOpts.style = 'expanded';
  const expandedResult = sass.compile('scss/timstrap.scss', sassOpts);

  fs.writeFileSync(OUTPUT_COMPRESSED, compressedResult.css);
  fs.writeFileSync(OUTPUT_DEBUG, expandedResult.css);
}

cleanDist();
copyAssets();
buildSass();

console.log('DONE'.green.bold);
