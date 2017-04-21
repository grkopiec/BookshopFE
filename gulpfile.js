var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

var paths = {
	html: [
	    './index.html'
	],
	js: [
	    './angular.js',
	    './app.js'
	],
	less: [
	    'less/**/*.less' 
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
			.pipe(concat(pkg.name + '.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist/prod'));
});

gulp.task('lessDev', function() {
	gulp.src('less/bootstrap.less')
			.pipe(less({
				filename: 'bootstrap.css'
			}))
			.pipe(gulp.dest('dist/dev'))
			.pipe(browserSync.reload({
				stream: true
			}));
});

gulp.task('lessProd', function() {
	gulp.src('less/bootstrap.less')
			.pipe(less({
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
	gulp.watch(paths.less, ['lessDev']);
});

gulp.task('prod', function() {
	gulp.start(['htmlProd', 'uglify', 'lessProd']);
});
gulp.task('dev', function() {
	gulp.start(['default']);
});

gulp.task('default', ['htmlDev', 'js', 'lessDev', 'browser-sync', 'watch']);