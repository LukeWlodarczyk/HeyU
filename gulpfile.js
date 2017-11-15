var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function()	{
    return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole:true}))
    .pipe(prefix("last 3 version", "> 1%", "ie 8", "ie 7"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
});
gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss',	['sass']);
});
