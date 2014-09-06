var gulp    = require('gulp'),
    cssmin  = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin'),
    imgmin  = require('gulp-imagemin'),
    concat  = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('src/css/*').pipe(cssmin({benchmark: true})).pipe(gulp.dest('./css'));
    gulp.src('src/*.html').pipe(htmlmin({collapseWhitespace: true, removeRedundantAttributes: true})).pipe(gulp.dest('./'));
    gulp.src('src/img/*').pipe(imgmin({progressive: true})).pipe(gulp.dest('./img'));
    gulp.src('css/*').pipe(concat('page.css')).pipe(gulp.dest('./css/'));
});