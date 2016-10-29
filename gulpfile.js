var gulp = require('gulp');
var sass = require('gulp-sass');	//Requires the gulp-sass plugin
var imagemin = require('gulp-imagemin'); //Requires the gulp-imagemin plugin // npm install gulp-imagemin --save-dev



/***** Sample only *****
gulp.task('task-name', function() {
	reutrn gulp.src('source-files') //Get source files with gulp.src
	.pipe(aGulpPlugin())	//Sends it through a gulp plugin
	.pipe(gulp.dest('destination')) //Outputs the file in the destination folder
});
/***** Sample only *****/



gulp.task ('hello', function () {	// print out "Hello World"
	console.log('Hello Grimes, well done, you make it!!!');
});

gulp.task('sass', function () { //Compile sass to css
	return gulp.src('work/src/styles/**/*') // source in root folder and child folders
	.pipe(sass()) //Using gulp-sass
	.pipe(gulp.dest('work/build/styles'))

});

gulp.task('watch', function() {
	
	// gulp.watch('files-to-watch', ['tasks','to','run']); // gulp watch syntax
	gulp.watch('work/src/styles/**/*', ['sass']); //gulp watch 
});

gulp.task('')