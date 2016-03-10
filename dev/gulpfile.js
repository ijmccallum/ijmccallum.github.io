var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('./index.html')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	removeComments: true,
    	minifyJS: true,
    	minifyCSS: true
    }))
    .pipe(gulp.dest('../'))
});

gulp.task('default', function() {
  // place code for your default task here
});