const gulp 						= require('gulp');
const config       		= require('./config');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();


gulp.task('html', function() {
  return gulp.src(config.src.root + '/**/*.html')
    .pipe($.emailBuilder().inlineCss())
    .pipe(gulp.dest(config.dest.root));
});


gulp.task('html:watch', () => {
	gulp.watch(config.src.root + '/**/*.html', ['html']);
});