const gulp 						= require('gulp');
const config       		= require('./config');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

const emailConfig = {
	emailTest : {

	  // Email to send to
	  to : 'newyorrker@gmail.com',

	  // Email sent from
	  from: 'fromEmail@email.com',

	  // Your email Subject
	  subject : 'Email Subject',

	  // Optional
	  nodemailer: {
	    transporter: {
	      service: 'gmail',
	      auth: {
	        user: 'newyorrker@gmail.com',
	        pass: 'system99893666'
	      }
	    },
	    defaults: {}
	  }
	}
}

gulp.task('html', function() {
  return gulp.src(config.src.root + '/**/*.html')
    .pipe($.emailBuilder(emailConfig).inlineCss())
    .pipe(gulp.dest(config.dest.root));
});


gulp.task('html:watch', () => {
	gulp.watch(config.src.root + '/**/*.html', ['html']);
});