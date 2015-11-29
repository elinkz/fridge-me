const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const livereload = require('gulp-livereload');
const del = require('del');
const styleGlob = 'src/scss/**/*.scss'
const scriptGlob = 'src/scripts/**/*.js'

/*gulp.task('styles', () => {
    return sass('app/src/scss/_all.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('app/dist/assets/css'))
    
    //.pipe(rename({suffix: '.min'}))
    //.pipe(minifycss())
    //.pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});*/

gulp.task('styles', function () {
  return gulp.src('./app/src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./app/dist/assets/css'))
    //.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', () => {
    gulp.src(scriptGlob)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean
gulp.task('clean', () => {
  return del(['dist/styles', 'dist/scripts']);
});

// Default task
gulp.task('default', ['clean'], () => {
  gulp.start('styles', 'scripts');
});


gulp.task('watch', () => {

  // Watch .scss files
  gulp.watch(styleGlob, ['styles']);

  // Watch .js files
  gulp.watch(scriptGlob, ['scripts']);
  
  // Create LiveReload server
  //livereload.listen(35732);

  // Watch any files in dist/, reload on change
  //gulp.watch(['dist/**']).on('change', livereload.changed);

});
