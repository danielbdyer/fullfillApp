var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', ['sass']);
})

gulp.task('default', ['sass','watch']);
