// task to convert sass to css

const gulp = require('gulp');
const sass = require('gulp-sass');
 
gulp.task('sass', () => {
  return gulp.src('./src/sass/layout/styles.scss')
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
});

//task to minify js to /js 