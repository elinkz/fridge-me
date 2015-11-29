const gulp = require('gulp');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const browserify = require('browserify');
const watchify = require('watchify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const notify = require("gulp-notify");

const styleGlob = 'app/src/scss/**/*.scss'
const scriptsDir = './app/src/scripts';
const buildDir = './app/dist/assets/js';

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
  var props = {
    entries: [scriptsDir + '/' + file],
    debug: !process.env.production,
    cache: {},
    packageCache: {}
  };
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  bundler.transform("babelify", { presets: ['es2015', 'react'] });

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest(buildDir + '/'));
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  bundler.on('time', function (time) {
    gutil.log('Bundle finished in: ' + time + ' ms.');
  })

  return rebundle();
}

// Compiles sass. Uses node-sass.
gulp.task('sass', function () {
  return gulp.src('./app/src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist/assets/css'))
});

// Deletes 'dist' directory
gulp.task('clean', () => del(['app/dist/**/*']));

// Copies index.html to 'dist' directory
gulp.task('copy', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('app/dist'));
});

// Task to build project, used when building project for production environment
gulp.task('build', ['clean', 'sass', 'copy'], function() {
  return buildScript('main.js', false);
});

// Task to build and watch files, used during development
gulp.task('default', ['build'], function() {
  // Watch .scss files
  gulp.watch(styleGlob, ['sass']);

  gulp.watch('app/index.html', ['copy']);
  
  // Create LiveReload server
  //livereload.listen(35732);

  // Watch any files in dist/, reload on change
  //gulp.watch(['dist/**']).on('change', livereload.changed);

  return buildScript('main.js', true);
});
