var gulp = require('gulp');
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['watch']);
gulp.task('js', () => {
    return gulp.src('js/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015','react']
        }))
        .pipe(concat('application.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});
gulp.task('watch', ['js'], function () {
    gulp.watch('js/*.js', ['default']);
});