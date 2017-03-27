'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import changed from 'gulp-changed';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sequence from 'run-sequence';


gulp.task('src-babel', () =>{
  const SRC = './src/**/*.js';
  const DEST = './dist';

  return gulp.src(SRC)
    .pipe(changed(DEST))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(DEST));
});


gulp.task('dev-babel', () => {
  const SRC = './dev/index.js';
  const DEST = './dev/tmp';

  return gulp.src(SRC)
    .pipe(babel({
      presets: ['es2015']
    }))
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





gulp.task('dev', () =>{
  gulp.watch('./src/**/*', () => {
    sequence('src-babel', 'dev-babel', 'dev-browserify');
  });
  gulp.watch('./dev/*.*', ['dev-browserify']);
})


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