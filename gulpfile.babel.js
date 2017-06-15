let gulp = require('gulp');
let babel = require('gulp-babel');
let changed = require('gulp-changed');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let sequence = require('run-sequence');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');
let dest = require('gulp-dest');

gulp.task('src-babel', () =>{
  const SRC = './src/**/*.js';
  const DEST = './dist';

  return gulp.src(SRC)
    .pipe(changed(DEST))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST));
});


gulp.task('dev-babel', () => {
  const SRC = './dev/index.js';
  const DEST = './dev/tmp';

  return gulp.src(SRC)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST));
});


gulp.task('dev-browserify', ['dev-babel'], () => {
  const BUNDLE = 'index-bundle.js';
  const SRC = './dev/tmp/index.js';
  const DEST = './dev'

  const B = browserify({
    entries: SRC,
    debug: true
  });

  return B.bundle()
    .pipe(source(BUNDLE))
    .pipe(buffer())
    .pipe(gulp.dest(DEST));
});


gulp.task('dist-uglify', () => {
  gulp.src('./dist/index.js')
    .pipe(buffer())
    .pipe(uglify())
    .pipe(dest('./dist', { ext: '.min.js' }))
    .pipe(gulp.dest('.'))
});


gulp.task('dev', () =>{
  gulp.watch('./src/**/*', () => {
    sequence('src-babel', 'dev-babel', 'dev-browserify', 'dist-uglify');
  });
  gulp.watch('./dev/*.*', ['dev-browserify']);
});





// var uglify = require('gulp-uglify');
// var sourcemaps = require('gulp-sourcemaps');
// var gutil = require('gulp-util');

// gulp.task('javascript', function () {
//   // set up the browserify instance on a task basis
//   var b = browserify({
//     entries: './dev/index.js',
//     debug: true
//   });

//   return b.bundle()
//     .pipe(source('app.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//         // Add transformation tasks to the pipeline here.
//         .pipe(uglify())
//         .on('error', gutil.log)
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/js/'));
// });