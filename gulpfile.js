const gulp = require('gulp');
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cache = require('gulp-cache');
const livereload = require('gulp-livereload');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

const styleGlob = 'app/src/scss/**/*.scss'
const scriptGlob = 'app/src/scripts/**/*.js'
const scriptMain = 'app/src/scripts/main.js'

gulp.task('sass', function () {
  return gulp.src('./app/src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist/assets/css'))
});

// Clean
gulp.task('clean', () => del(['app/dist/**/*']));

/*gulp.task('scripts', () => {
    gulp.src(scriptGlob)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});*/

gulp.task('browserify', function() {
  return gulp.src(scriptMain)
    .pipe(sourcemaps.init())
    .pipe(browserify({
      transform:'reactify',
      //debug: !process.env.production
    }))
    .pipe(concat('scripts.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/dist/assets/js'));
});

gulp.task('copy', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('app/dist'));
});


gulp.task('watch', () => {

  // Watch .scss files
  gulp.watch(styleGlob, ['styles']);

  // Watch .js files
  gulp.watch(scriptGlob, ['browserify']);

  gulp.watch('app/index.html', ['copy']);
  
  // Create LiveReload server
  //livereload.listen(35732);

  // Watch any files in dist/, reload on change
  //gulp.watch(['dist/**']).on('change', livereload.changed);

});

// Default task
gulp.task('default', ['clean', 'browserify', 'sass', 'copy']);