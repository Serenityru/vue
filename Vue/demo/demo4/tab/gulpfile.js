/**
 * Created by Serenity on 2017/11/5.
 */
let gulp = require('gulp');
let babel = require('gulp-babel');
gulp.task('babel', function () {
    gulp.src('./Scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./libs'))
});