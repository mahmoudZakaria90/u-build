var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var csso = require('gulp-csso');

//sass-en
gulp.task('sass', function () {
   sass('./src/sass/en/*.sass',{style:'compressed'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});


//watch 
gulp.task('watch',function(){
	gulp.watch('./src/sass/en/*.sass',['sass'])
	gulp.watch('./public/**/*.html',['html'])
    gulp.watch('./src/js/*.js',['js'])
})


//html live reload
gulp.task('html', function() {
	gulp.src('./public/**/*.html')
		.pipe(connect.reload());

})

gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(connect.reload())
        .pipe(gulp.dest('./public/js'))
})

//Localhost 
gulp.task('server',function(){
	connect.server({
		root: 'public',
		livereload: true
	})
})


//css minify
gulp.task('csso', function () {
    return gulp.src('./public/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./public/css/'));
});
//default
gulp.task('default',['watch','server','js','sass','csso'])