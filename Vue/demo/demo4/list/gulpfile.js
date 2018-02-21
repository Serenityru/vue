/**
 * Created by Serenity on 2017/11/5.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('babel', function () {
    gulp.src('./Scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./libs'))
});