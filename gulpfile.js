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
	    'bower_components/bootstrap/dist/js/bootstrap.js',
	    'bower_components/angular/angular.js',
	    'bower_components/angular-route/angular-route.js',
	    'app/**/*.js'
	],
	sass: [
	    'app/styles/_bootstrap.scss'       
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
	.pipe(sass({
		filename: 'bootstrap.css'
	}))
	.pipe(gulp.dest('dist/dev'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('sassProd', function() {
	gulp.src(paths.sass)
	.pipe(sass({
		filename: 'bootstrap.css'
	}))
	.pipe(gulp.dest('dist/prod')); 
});

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		server: {
			baseDir: 'dist/dev'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch(paths.html, ['htmlDev']);
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.sass, ['sassDev']);
});

gulp.task('prod', function() {
	gulp.start(['htmlProd', 'uglify', 'sassProd']);
});
gulp.task('dev', function() {
	gulp.start(['default']);
});

gulp.task('default', ['htmlDev', 'js', 'sassDev', 'browser-sync', 'watch']);