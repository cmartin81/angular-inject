var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('default', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('dist'));
});