var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

var paths = {
	html: [
	    'app/**/*.html'
	],
	js: [
	    'bower_components/jquery/dist/jquery.js',
	    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
	    'bower_components/angular/angular.js',
	    'bower_components/angular-route/angular-route.js',
	    'bower_components/angular-resource/angular-resource.js',
	    'app/app.mdl.js',
	    'app/app.rout.js',
	    'app/*/**/*.js'
	],
	sass: [
	    'app/styles/style.scss'   
	],
	sassWatch: [
	    'app/**/*.scss'
	],
	fonts: [
	    'bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*'
	]
}

gulp.task('htmlDev', function() {
	gulp.src(paths.html)
			.pipe(gulp.dest('dist/dev'))
			.pipe(browserSync.reload({
				stream: true
			}));
});

gulp.task('htmlProd', function() {
	gulp.src(paths.html)
			.pipe(gulp.dest('dist/prod'))
});

gulp.task('js', function() {
	gulp.src(paths.js)
			.pipe(concat(pkg.name + '.js'))
			.pipe(gulp.dest('dist/dev'))
			.pipe(browserSync.reload({
				stream: true
			}));
});

gulp.task('uglify', function() {
	gulp.src(paths.js)
			.pipe(concat(pkg.name + '.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist/prod'));
});

gulp.task('sassDev', function() {
	gulp.src(paths.sass)
			.pipe(sass())
			.pipe(gulp.dest('dist/dev'))
			.pipe(browserSync.reload({
				stream: true
			}));
});

gulp.task('sassProd', function() {
	gulp.src(paths.sass)
			.pipe(sass())
			.pipe(gulp.dest('dist/prod')); 
});

gulp.task('fontsDev', function() {
	gulp.src(paths.fonts)
			.pipe(gulp.dest('dist/dev/fonts'))
});

gulp.task('fontsProd', function() {
	gulp.src(paths.fonts)
			.pipe(gulp.dest('dist/prod/fonts'))
});

gulp.task('browserSync', function() {
	browserSync.init(null, {
		server: {
			baseDir: 'dist/dev'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch(paths.html, ['htmlDev']);
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.sassWatch, ['sassDev']);
});

gulp.task('prod', function() {
	gulp.start(['htmlProd', 'uglify', 'sassProd', 'fontsProd']);
});
gulp.task('dev', function() {
	gulp.start(['default']);
});

gulp.task('default', ['htmlDev', 'js', 'sassDev', 'fontsDev', 'browserSync', 'watch']);