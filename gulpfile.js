var gulp    = require('gulp'),
    cssmin  = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin'),
    imgmin  = require('gulp-imagemin');

gulp.task('default', function() {
    gulp.src('src/css/*').pipe(cssmin({benchmark: true})).pipe(gulp.dest("./css"));
    gulp.src('src/*.html').pipe(htmlmin()).pipe(gulp.dest("./"));
    gulp.src('src/img/*').pipe(imgmin({progressive: true})).pipe(gulp.dest("./img"));
});