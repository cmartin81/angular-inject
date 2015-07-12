var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');


gulp.task('default', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  return gulp.src('test/**/*.js')
    .pipe(babel({optional: ['es7.decorators']}))
    .pipe(mocha({reporter: 'nyan'}))
});