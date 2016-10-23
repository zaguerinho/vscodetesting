var gulp  = require('gulp'),
    gutil = require('gulp-util');
gulp.task('sayhi',function() {
    gutil.log('mmmh maybe not so great');

});
gulp.task('saybye', function() {
    gutil.log('Hi There!');
});
