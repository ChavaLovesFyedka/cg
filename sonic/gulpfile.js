var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


 
gulp.task('sass', function() {
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer('> 1%', 'last 2 versions', 'ie 9', 'Opera 12.1'))
    .pipe(gulp.dest('css'))
});

gulp.task('html', function() {
	return gulp.src('*.html')
});


gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "*.html"],{
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass'])
	gulp.watch('*.html', ['html'])
});

gulp.task('default', ['sass', 'watch', 'html', 'browser-sync']);