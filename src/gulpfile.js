'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
});
 
gulp.task('watch', () => {
  gulp.watch('sass/*.scss', gulp.series('sass'))
});
//task to minify js to /js 