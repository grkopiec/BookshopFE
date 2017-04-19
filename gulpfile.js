var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

var paths = {
	js: [
	     './angular.js',
	     './app.js'
	]
}

gulp.task('uglify', function() {
	gulp.src(paths.js)
	.pipe(concat(pkg.name + '.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/prod'));
});

gulp.task('concat', function() {
	gulp.src(paths.js)
	.pipe(concat(pkg.name + '.js'))
	.pipe(gulp.dest('dist/dev'));
});

gulp.task('watch', function() {
	gulp.watch(paths.js, ['concat']);
});

gulp.task('prod', ['uglify']);
gulp.task('dev', ['default']);

gulp.task('default', ['concat', 'watch']);