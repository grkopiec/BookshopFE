var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var pkg = require('./package.json');

var paths = {
	js: [
	     './angular.js',
	     './app.js'
	],
	less: [
	    'less/**/*.less' 
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

gulp.task('lessDev', function() {
	gulp.src('less/bootstrap.less')
	.pipe(less({
		filename: 'bootstrap.css'
	}))
	.pipe(gulp.dest('dist/dev')); 
});

gulp.task('lessProd', function() {
	gulp.src('less/bootstrap.less')
	.pipe(less({
		filename: 'bootstrap.css'
	}))
	.pipe(gulp.dest('dist/prod')); 
});

gulp.task('watch', function() {
	livereload.listen(35732);
	
	gulp.watch(paths.js, ['concat']);
	gulp.watch(paths.less, ['lessDev']);
	
	gulp.watch('dist/dev/' + pkg.name + '.js', function(file) {
		livereload.changed(file.path);
	});
	gulp.watch('dist/dev/bootstrap.css', function(file) {
		livereload.changed(file.path);
	});
});

gulp.task('prod', ['uglify', 'lessProd']);
gulp.task('dev', ['default']);

gulp.task('default', ['concat', 'lessDev', 'watch']);